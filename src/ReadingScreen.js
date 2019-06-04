import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const ReadingScreen = props => {
  let [addComment, setAddComment] = useState('');
  let [newComment, setNewComment] = useState([]);

  let objComment = {
    id: '',
    content: addComment,
    author: 'name',
  };

  let arr_post = props.post_info.filter(x => {
    return x.id === props.clickpost + 1;
  });

  const objPost = arr_post.reduce((prev, curr) => {
    prev = curr;
    return prev;
  }, {});

  if (newComment.length === 0 && objPost.comments.length === 0) {
    setNewComment([objPost.comments]);
  } else if (newComment.length === 0 && objPost.comments.length !== 0) {
    setNewComment([...objPost.comments]);
  } else {
    objPost.comments = newComment;
  }

  return (
    <div>
      <div>
        <NavLink to="/">Back</NavLink>
        <div style={{ backgroundImage: 'url(' + objPost.image + ')' }}>
          {objPost.title}
        </div>
        <div>{objPost.description}</div>
        <div>
          <h3>Comments</h3>
          <div>
            {objPost.comments.map((comment, key) => {
              return <div>{comment.content}</div>;
            })}
          </div>
        </div>
      </div>
      <input
        type="text"
        value={addComment}
        onChange={e => setAddComment(e.target.value)}
      />
      <br />
      <input
        type="submit"
        onClick={() => setNewComment([...newComment, objComment])}
      />
    </div>
  );
};

export default ReadingScreen;
