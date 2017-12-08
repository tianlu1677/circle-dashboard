import React, { Component } from 'react';
import { ConnectedRouter, routerMiddleware} from 'react-router-redux';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import createHistory from 'history/createBrowserHistory';

import { LocaleProvider, Spin } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';


import HomeRoute from './home/index'
import BasicLayout from '../layouts/BasicLayout'

class RootRoutes extends Component {
  render() {
    const history = createHistory()
    const dashboardRouterMiddleware = routerMiddleware(history)
    
    return(
      <LocaleProvider locale={zhCN}>
        <ConnectedRouter history={history}>          
          <Route path="/" render={props => <BasicLayout {...props}></BasicLayout>} />
        </ConnectedRouter>  
      </LocaleProvider>
      
    );
  }
}

export default RootRoutes;

// 1. redux-router
// 2. antd LocaleProvier
// 3. Router 
// 4. 渲染Layout,再在layout里面指明路由
