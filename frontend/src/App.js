import React, { Component } from 'react';
import Root from './components/Root'
import Category from './components/Category'
import Post from './components/Post'
import PostEdit from './components/PostEdit'
import { Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => (
            <Root />
          )}/>
          <Route exact path='/category' render={() => (
            <Category />
          )}/>
          <Route exact path='/post' render={() => (
            <Post />
          )}/>
          <Route exact path='/post-edit' render={() => (
            <PostEdit />
          )}/>
        </Switch>
      </div>
    );
  }
}

export default App;
