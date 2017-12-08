import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { ConnectedRouter, routerMiddleware} from 'react-router-redux';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router'
import createHistory from 'history/createBrowserHistory'

import configureStore from './app/store/createStore'
import RootRoutes from './app/routes/Root'

class App extends Component {
  
  render() {
    
    const dashboardStore = configureStore()
    return(
      <Provider store={dashboardStore}>
         <RootRoutes />
      </Provider>
    );
  }
}

export default App;
