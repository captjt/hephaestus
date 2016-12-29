import React, { Component } from 'react';

import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;


class TabTypes extends Component {
  render() {
    return (
      <Tabs>
        <TabPane tab="All" key="1">All</TabPane>
        <TabPane tab="People" key="2">People</TabPane>
        <TabPane tab="SharePoint" key="3">SharePoint</TabPane>
      </Tabs>
    );
  }
}

export default TabTypes;
