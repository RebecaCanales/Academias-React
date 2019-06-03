import React from 'react';
import Buttons from './Buttons';
import ModalButton from './ModalButton';
import { NavLink } from 'react-router-dom';

const Home = props => {
  const { handleCategory } = props;
  let arr_post = '';

  if (props.categories === 'all') {
    arr_post = props.post_info;
  } else if (
    props.categories === 'travel' ||
    props.categories === 'lifestyle' ||
    props.categories === 'business' ||
    props.categories === 'food' ||
    props.categories === 'work'
  ) {
    arr_post = props.post_info.filter(x => {
      return x.category === props.categories;
    });
  } else {
    arr_post = props.post_info;
  }

  const handlePost = count => {
    props.Post(count);
  };

  const handleDelete = key => {
    arr_post = props.post_info.filter(x => {
      return x.id - 1 != key;
    });
    console.log(arr_post);
  };

  return (
    <div className="App">
      <ModalButton />
      <Buttons handleCategory={handleCategory} />
      <div>
        {arr_post.map((post, key) => {
          return (
            <div>
              <NavLink
                to="/ReadingScreen"
                onClick={() => {
                  handlePost(key);
                }}
              >
                <div style={{ backgroundImage: 'url(' + post.image + ')' }}>
                  <h3>{post.title}</h3>
                  <span>
                    <i>{post.comments.length} Comments</i>
                  </span>
                  <p>{post.shortDescription}</p>
                  <label>{post.category}</label>
                  <br />
                </div>
              </NavLink>
              <button>Edit</button>
              <button value={key} onClick={e => handleDelete(e.target.value)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
