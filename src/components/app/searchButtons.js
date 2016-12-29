import React, { Component } from 'react';
import { Button } from 'antd';

class SearchButtons extends Component {
  render() {
    return (
        <div className="Search-button">
            <Button icon="search">Search</Button>
            <Button icon="search">Feeling LUCKY?</Button>
        </div>
    );
  }
}

export default SearchButtons;
