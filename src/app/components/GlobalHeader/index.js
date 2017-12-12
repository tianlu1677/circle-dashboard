import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon, Avatar, Dropdown, Tag, message, Spin } from 'antd';

import s from './index.scss';

const { Header} = Layout
const MenuItem = Menu.Item

export default class index extends React.Component {
  static propTypes = {
    name: PropTypes.string,
  };

  render() {

    const menu = (
      <Menu className="" selectedKeys={[]}>
        <MenuItem disabled><Icon type="user"/>个人中心</MenuItem>
        <MenuItem disabled><Icon type="setting"/>设置</MenuItem>
        <Menu.Divider />
        <MenuItem key="logout"><Icon type="logout" />退出</MenuItem>
      </Menu>
      )
  
    return (
      <Header className={s.header}>
        <Icon className="" type="menu-unfold"></Icon>
        <div className={s.right}>
          <Dropdown overlay={menu}>          
            <Avatar size="large" className={s.avatar} src={'https://avatars2.githubusercontent.com/u/2594920?s=40&v=4'} >
              张三
            </Avatar>
        </Dropdown>

        </div>      
      </Header>
    );
  }
}
