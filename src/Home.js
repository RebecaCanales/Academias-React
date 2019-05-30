import React from 'react';
import Buttons from './Buttons'
import {NavLink} from 'react-router-dom';

const Home = (props)=> {
    const { handleCategory } = props
    let arr_post = props.post_info;
    let post_click = "";

    if (props.categories==="all") {
        arr_post = props.post_info;
    } else if (props.categories==="travel" || props.categories=== "lifestyle" || props.categories=== "business" || props.categories=== "food" || props.categories=== "work") {
        arr_post = props.post_info.filter((x)=> {
            return x.category === props.categories;
        });
    } else {
        arr_post = props.post_info;
    }
  
    return (
      <div className="App">
        <button onClick = {()=>{props.history.push("/NewPost")}}>
            Modalinlin
        </button>
        <Buttons handleCategory={handleCategory}/>
            <div>
                { 
                    arr_post.map((post, key)=> {
                        console.log(key)
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