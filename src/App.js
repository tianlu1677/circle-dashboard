import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { ConnectedRouter, routerMiddleware} from 'react-router-redux';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router'
import createHistory from 'history/createBrowserHistory'

import configureStore from './app/store/createStore'
import Home from './app/routes/home/index'

class App extends Component {
  
  render() {
    const history = createHistory()
    const dashboardRouterMiddleware = routerMiddleware(history)
    const dashboardStore = configureStore()
    return (
      <Provider store={dashboardStore}>
        <ConnectedRouter history={history}>
          <Route path="/home" component={ Home }></Route>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
