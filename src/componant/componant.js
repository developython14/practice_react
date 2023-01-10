import React, { Component } from 'react';
import { Media } from 'reactstrap';


class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {'name':'mustapha'}
      }


    render() {
      return <div>
        <h3>this.state.name</h3>
      </div>
    }
  }


export {Welcome}