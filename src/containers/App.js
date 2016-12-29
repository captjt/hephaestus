import React, { Component } from 'react';
import { Row, Col } from 'antd';

import SearchBar from '../components/app/searchBar';
import FilterBoxes from '../components/app/filterBoxes';
import SearchButtons from '../components/app/searchButtons';
import NavbarTop from '../components/nav/navTop';
import TabTypes from '../components/results/tabTypes';

import '../styles/index.css';
import logo from '../assets/charles.jpg'

class App extends Component {
  render() {
    return (
      <div>
        <div className="Nav">
          <NavbarTop />
        </div>
        <div className="App">
          <Row type="flex" justify="space-around" align="middle">
            <div className="logo"><img src={logo} /></div>
          </Row>
          <Row type="flex" justify="space-around" align="middle">
            <Col span={8}><SearchBar /></Col>
          </Row>
          <Row type="flex" justify="space-around" align="middle">
            <Col span={4}><SearchButtons /></Col>
          </Row>
        </div>
        <div className="Tabs">
          <Row type="flex" justify="space-around" align="left">
            <Col span={18}><TabTypes /></Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
