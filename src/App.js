import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import {Switch} from 'react-router'
import ReadingScreen from './ReadingScreen'
import Home from './Home'
import axios from 'axios'
import NewPost from './NewPost'



const App = ()=> {
  let [post_info, setPost_info] = useState([]);
  let [categories, seCategories] = useState("");

  useEffect (() =>{
      axios.get('https://private-c3edb-postsmock.apiary-mock.com/posts')
      .then(response => {
         setPost_info(response.data)
      });
  }, [])

  let handleCategory = (cat)=> {
    seCategories(cat)
  }

    return (
      <div>
        <header>
          <span>[ Making your Life Easier ]</span>
          <h2>Discovering the World</h2>
        </header>
        <Router>
          <Switch>
            <Route exact path="/" render={(props)=> <Home handleCategory={handleCategory} post_info={post_info} categories={categories}/>} />
            <Route path="/ReadingScreen" render={(props)=> <ReadingScreen post_info={post_info}/>}/>
            <Route path="/NewPost" component={NewPost}/>
          </Switch>
        </Router>
      </div>
    );
}

export default App;
