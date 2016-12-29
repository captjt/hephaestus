import React, { Component } from 'react';
import { Checkbox } from 'antd';
const CheckboxGroup = Checkbox.Group;

const plainOptions = ['F', 'J', 'IRM'];
// const defaultCheckedList = ['EB', 'FA'];

class FilterBoxes extends Component {
  render() {
    return (
      <div>
        <div style={{ borderBottom: '1px solid #E9E9E9' }}>
          <Checkbox>
            Check all
          </Checkbox>
        </div>
        <br />
        <CheckboxGroup options={plainOptions} />
      </div>
    );
  }
};

export default FilterBoxes;
