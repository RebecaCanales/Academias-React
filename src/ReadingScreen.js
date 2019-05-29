import React from 'react';

const ReadingScreen = (props)=> {
    let arr_post = props.post_info;
    console.log(arr_post)
     return (
        <div>
            { 
                arr_post.map((post, key)=>{
                    return(
                        <div>
                            <div style={{backgroundImage: "url("+ post.image + ")"}}>
                                {post.title}
                            </div>
                            <div>{post.shortDescription}</div>
                            <div>
                                <h3>Comments</h3>
                                <p>Los coments</p>
                            </div>
                        </div>
                    )
                }
                )
            }
            <input type="text"/><br/>
            <input type="submit"/>
        </div>
     )
}

export default ReadingScreen;