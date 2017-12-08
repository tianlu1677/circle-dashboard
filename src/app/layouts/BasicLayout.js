import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon, Avatar, Dropdown, Tag, message, Spin } from 'antd';
import DocumentTitle from 'react-document-title';
import { connect } from 'redux';
import { Route, Redirect, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import moment from 'moment';

import groupBy from 'lodash/groupBy';
// import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
// import Debounce from 'lodash-decorators/debounce';

import IndexRoutes from '../routes/index'
const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;
const MenuItem = Menu.Item;

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
  },
};


class BasicLayout extends Component {
  // static childContextTypes = {
  //   location: PropTypes.object,
  //   breadcrumbNameMap: PropTypes.object
  // }

  constructor(props){
    super(props)
  }

  render() {
    const menu = (
      <Menu className="" selectedKeys={[]}>
        <MenuItem disabled><Icon type="user"/>个人中心</MenuItem>
        <MenuItem disabled><Icon type="setting"/>设置</MenuItem>
        <Menu.Divider />
        <MenuItem key="logout"><Icon type="logout" /></MenuItem>
      </Menu>
      )

    const layout = (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsible={true}
          defaultCollapsed={false}
          breakpoint="md"
          width="256"          
        >
          <div className="">
            <Link to="/">
              <img src="" alt=""/>
              <h1>Circle-Dashboard</h1>
            </Link>
          </div>
          {/*菜单*/}
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
          >
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="inbox" />
              <span>Option 3</span>
            </Menu.Item>
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </SubMenu>
            
          </Menu>

        </Sider>
        <Layout>
          <Header>
            <Icon className="" type="menu-unfold"></Icon>
            <Dropdown overlay={menu}>
              <span className={''}>
                <Avatar size="small" className={''} src={'https://avatars2.githubusercontent.com/u/2594920?s=40&v=4'} />
                张三
              </span>
            </Dropdown>

          </Header>
          <Content style={{margin: '24px 24px 0', height: '100%'}}>
            <div style={{minHeight: 'calc(100vh - 260px)'}}>              
              <IndexRoutes />              
            </div>
          </Content>
          <Footer>
            <div>
              Copyright <Icon type="copyright" /> 2017 蚂蚁金服体验技术部出品
            </div>
          </Footer>
        </Layout>
      </Layout>
      )
  
    return (
      <DocumentTitle title="dashboar">
        {layout}
      </DocumentTitle>              
    );
  }
}

export default BasicLayout;
