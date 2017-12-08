import React, { Component } from 'react';
import { Route, Switch } from 'react-router'
import HomeRoute from './home/index'


class IndexRoutes extends Component {
  render() {
    return (
      <div>
        <HomeRoute />
      </div>
    );
  }
}

export default IndexRoutes;
