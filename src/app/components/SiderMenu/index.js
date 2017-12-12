import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon, Avatar, Dropdown, Tag, message, Spin } from 'antd';
import { Link } from 'react-router-dom';
import s from './index.scss';

const { Sider } = Layout;
const { SubMenu } = Menu
class index extends Component {
  render() {
    return (
      <Sider
          trigger={null}
          collapsible
          collapsible={true}
          defaultCollapsed={false}
          breakpoint="md"
          width="256"          
        >
          <div className={s.header}>
            <Link to="/">
              <img src="" alt=""/>
              <h1>Dashboard</h1>
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
              <span>Dashboard</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>运营数据统计</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="inbox" />
              <span>访问记录</span>
            </Menu.Item>
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>用户列表</span></span>}>
              <Menu.Item key="5">创业者</Menu.Item>
              <Menu.Item key="6">投资人</Menu.Item>
              <Menu.Item key="7">普通用户</Menu.Item>              
            </SubMenu>            
          </Menu>

        </Sider>

    );
  }
}

export default index;
