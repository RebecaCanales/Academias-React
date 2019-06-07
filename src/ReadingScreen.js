import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Typography';

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
        <Card
          style={{
            backgroundImage: 'url(' + objPost.image + ')',
            height: '200px',
          }}
        >
          <Typography
            variant="h3"
            style={{ color: 'white', padding: '60px 60px 60px 60px' }}
          >
            {objPost.title}
          </Typography>
        </Card>
        <Typography variant="h5">{objPost.description}</Typography>
        <div>
          <h3>Comments</h3>
          <div>
            {objPost.comments.map((comment, index) => {
              return (
                <div>
                  <Paper elevation="3" style={{ width: '40%' }}>
                    <div key={`${comment}${index}`}>{comment.name}</div>
                    <div>{comment.content}</div>
                  </Paper>
                  <br />
                </div>
              );
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
