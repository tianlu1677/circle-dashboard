import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon, Avatar, Dropdown, Tag, message, Spin } from 'antd';
import DocumentTitle from 'react-document-title';
import { connect } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import moment from 'moment';

import groupBy from 'lodash/groupBy';
// import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
// import Debounce from 'lodash-decorators/debounce';

import GlobalFooter from '../components/GlobalFooter'
import GlobalHeader from '../components/GlobalHeader'
import SiderMenu from '../components/SiderMenu'
import IndexRoutes from '../routes/index'
import style from './BasicLayout.scss'

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
const MenuItem = Menu.Item;

class BasicLayout extends Component {

  render() {
    
    const layout = (
      <Layout>
        <SiderMenu />
        <Layout>

          <GlobalHeader />

          <Content style={{margin: '24px 24px 0', height: '100%'}}>
            <div style={{minHeight: 'calc(100vh - 260px)'}}>              
              <IndexRoutes />              
            </div>
          </Content>
          
          <GlobalFooter links={[{title: '创投圈', href: "http://www.vc.cn"}]} />
          
        </Layout>
      </Layout>
      )
  
    return (
      <DocumentTitle>
        <div>        
          {layout}
        </div>        
      </DocumentTitle>              
    );
  }
}

export default connect(state => ({
  currentUser: {name: 'zhangsan'},
  collapsed: true
}))(BasicLayout);
