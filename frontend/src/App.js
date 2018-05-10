import React, { Component } from 'react';
import RootView from './components/RootView'
import PostDetailsView from './components/PostDetailsView'
import PostEditView from './components/PostEditView'
import { Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={RootView}/>
          <Route exact path="/:category" component={RootView}/>
          <Route exact path="/:category/:post_id" component={PostDetailsView} />
          <Route exact path="/:category/:post_id/edit" component={PostDetailsView} />
        </Switch>
      </div>
    );
  }
}

export default App;
