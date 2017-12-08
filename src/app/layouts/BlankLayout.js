import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router'
import HomeRoute from '../routes/home/index'

class BlankLayout extends Component {
  constructor(){
    super()
  }

  render() {
  
    return (
      <div>
        <h1>hello</h1>
        <HomeRoute />
      </div>
    );
  }
}

export default BlankLayout;
