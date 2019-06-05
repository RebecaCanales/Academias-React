import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import ReadingScreen from './ReadingScreen';
import Home from './Home';
import axios from 'axios';

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

  let funcSubmit = saved => {
    setSaveForm(saved);
  };

  return (
    <div>
      <header>
        <span>[ Making your Life Easier ]</span>
        <h2>Discovering the World</h2>
      </header>
      <Router>
        <Switch>
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
              />
            )}
          />
          <Route
            path="/ReadingScreen"
            render={props => (
              <ReadingScreen clickpost={count} post_info={post_info} />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
