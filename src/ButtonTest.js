import React, { Component } from 'react';

import { Button } from './styles';

export default class ButtonTest extends Component {
  render() {
    return (
        <Button onClick={() => this.props.click()}>
            {this.props.text}
        </Button>
    );
  }
}
