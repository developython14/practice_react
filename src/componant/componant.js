import React, { Component } from 'react';
import { Media } from 'reactstrap';


class Welcome extends Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }


export {Welcome}