import React, { useState } from 'react';
import Buttons from './Buttons';
import ModalButton from './ModalButton';
import { NavLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

const Home = props => {
  console.log(props.post_info);
  const { handleCategory } = props;
  let arr_post = [];
  console.log(props.saveForm);

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
      return x.id != key;
    });
    props.funcDelete(arr_post);
  };

  return (
    <div className="App">
      <ModalButton funcSubmit={props.funcSubmit} arr_post={arr_post} />
      <Buttons handleCategory={handleCategory} />
      <br />
      <Grid container>
        {arr_post.map((post, index) => {
          return (
            <Grid item xs={12} sm={6} key={`${post}${index}`}>
              <Card>
                <div
                  style={{
                    backgroundImage: 'url(' + post.image + ')',
                    height: '250px',
                  }}
                >
                  <NavLink
                    to="/ReadingScreen"
                    style={{ textDecoration: 'none' }}
                    onClick={() => {
                      handlePost(index);
                    }}
                  >
                    <div>
                      <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                        {post.title}
                      </Typography>
                      <span>
                        <Typography>
                          <i>{post.comments.length} Comments</i>
                        </Typography>
                      </span>
                      <Typography paragraph>{post.shortDescription}</Typography>
                      <Typography
                        style={{
                          textTransform: 'uppercase',
                          fontWeight: 'bold',
                        }}
                      >
                        {post.category}
                      </Typography>
                      <br />
                    </div>
                  </NavLink>
                  <button onClick={() => handleDelete(post.id)}>Delete</button>
                </div>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Home;
