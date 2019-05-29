import React from 'react';
import Buttons from './Buttons'
import {NavLink} from 'react-router-dom';

const Home = (props)=> {

  
    // let arr_post = props.post_info.filter((x)=> {
    //     return x.category === props.categories;
    // });
    // console.log(props.categories)
    let arr_post=props.post_info;
  
    return (
      <div className="App">
        <Buttons />
            <div>
                { 
                    arr_post.map((post, key)=> {
                        return(
                            <NavLink to="/ReadingScreen">
                                <div style={{backgroundImage: "url("+ post.image + ")"}}>
                                    <h3>{post.title}</h3>
                                    <span><i>{post.comments.length} Comments</i></span>
                                    <p>{post.shortDescription}</p>
                                    <label>{post.category}</label>
                                </div>
                            </NavLink>
                        )
                    }
                    )
                }
            </div>
      </div>
    );
}

export default Home;