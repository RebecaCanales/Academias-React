import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import ReadingScreen from './ReadingScreen';
import Home from './Home';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import { RSA_NO_PADDING } from 'constants';

const App = () => {
  let [post_info, setPost_info] = useState([]);
  let [categories, setCategories] = useState('');
  let [count, setCount] = useState('');
  let [saveForm, setSaveForm] = useState('');

  useEffect(() => {
    axios
      .get('https://private-c3edb-postsmock.apiary-mock.com/posts')
      .then(response => {
        setPost_info(response.data);
      });
  }, []);

  let handleCategory = cat => {
    setCategories(cat);
  };

  let Post = count => {
    setCount(count);
  };
  let funcDelete = buttonDelete => {
    setPost_info(buttonDelete);
  };

  let funcSubmit = saved => {
    console.log(saved);
    setSaveForm(saved);
    setPost_info([...post_info, saved]);
  };

  return (
    <div align="center">
      <header>
        <Typography style={{ color: 'coral', padding: '35px 0 15px 0' }}>
          <span style={{ fontSize: '35px' }}>[</span> Making your Life Easier{' '}
          <span style={{ fontSize: '35px' }}>]</span>
        </Typography>
        <Typography
          variant="h3"
          style={{ fontWeight: 'bold', padding: '0 0 30px 0' }}
        >
          Discovering the World
        </Typography>
      </header>
      <Router>
        <Route
          exact
          path="/"
          render={props => (
            <Home
              Post={Post}
              funcSubmit={funcSubmit}
              handleCategory={handleCategory}
              saveForm={saveForm}
              post_info={post_info}
              categories={categories}
              funcDelete={funcDelete}
            />
          )}
        />
        <Route
          path="/ReadingScreen"
          render={props => (
            <ReadingScreen clickpost={count} post_info={post_info} />
          )}
        />
      </Router>
    </div>
  );
};

export default App;
