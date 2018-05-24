import React, { Component } from 'react';
import RootView from './components/RootView'
import PostDetailsView from './components/PostDetailsView'
import { Switch, Route } from 'react-router-dom'
import './App.css';

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={RootView}/>
      <Route exact path="/:category" component={RootView}/>
      <Route exact path="/:category/:post_id" component={PostDetailsView} />
    </Switch>
  </div>
);

export default App;
