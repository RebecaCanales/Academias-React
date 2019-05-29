import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import {Switch} from 'react-router'
import ReadingScreen from './ReadingScreen'
import Home from './Home'
import Buttons from './Buttons'
import axios from 'axios'



function App(props) {
  let [post_info, setPost_info] = useState([]);

  useEffect (()=>{
      axios.get('https://private-c3edb-postsmock.apiary-mock.com/posts')
      .then(response => {
          setPost_info(response.data)
      });
  }, [])

  const [categories, seCategories] = useState("All");

  const handleCategory = (cat)=> {
    seCategories(cat)
    console.log(categories)
  }

  return (
    <div>
      <header>
        <span>[ Making your Life Easier ]</span>
        <h2>Discovering the World</h2>
      </header>
      <Router>
        <Switch>
          <Route exact path="/" render={(props)=> <Home post_info={post_info}/>} />
          <Route path="/Buttons" render={(props)=><Buttons handleCategory={()=>handleCategory}/>} />
          <Route path="/ReadingScreen" render={(props)=> <ReadingScreen post_info={post_info}/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
