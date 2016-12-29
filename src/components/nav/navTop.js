import React, { Component } from 'react';

import { Menu, Icon } from 'antd';


class NavbarTop extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item className="Nav-item" key="apps">
          <Icon type="appstore-o" />
        </Menu.Item>
        <Menu.Item className="Nav-item" key="help">
          <Icon type="question-circle-o" />
        </Menu.Item>
      </Menu>
    );
  }
}

export default NavbarTop;
