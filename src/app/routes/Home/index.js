import React, { Component } from 'react';
import { Route, Switch } from 'react-router'
import Home from './containers/Home'
import BlankLayout from '../../layouts/BlankLayout'

class HomeRoute extends Component {
  render() {
    return (
      <div>
        <Switch>                        
          <Route exact path="/home" component={Home}></Route>
          <Route path="/dashboard" render={() => <h1>uuu</h1> }></Route>
        </Switch>
      </div>
    );
  }
}

export default HomeRoute;
