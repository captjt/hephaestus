import React, { Component } from 'react';
import { Input } from 'antd';

const Search = Input.Search;

class SearchBar extends Component {
  render() {
    return (
        <div className="Search-bar">
            <Search placeholder="take a spin" onSearch={value => console.log(value)} size="large" />
        </div>
    );
  }
}

export default SearchBar;
