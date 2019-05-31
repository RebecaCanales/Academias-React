import React, { useState } from 'react';

const ReadingScreen = props => {
  let [addComment, setAddComment] = useState('');
  let [newComment, setNewComment] = useState([]);

  let arr_post = props.post_info.filter(x => {
    return x.id === props.clickpost + 1;
  });

  return (
    <div>
      {arr_post.map(post => {
        return (
          <div>
            <div style={{ backgroundImage: 'url(' + post.image + ')' }}>
              {post.title}
            </div>
            <div>{post.description}</div>
            <div>
              <h3>Comments</h3>
              <div>
                {post.comments.map((comment, key) => {
                  return <div>{comment.content}</div>;
                })}
              </div>
              <div>
                {newComment}
                <br />
              </div>
            </div>
          </div>
        );
      })}
      <input
        type="text"
        value={addComment}
        onChange={e => setAddComment(e.target.value)}
      />
      <br />
      <input
        type="submit"
        onClick={() => setNewComment([...newComment, addComment])}
      />
    </div>
  );
};

export default ReadingScreen;
