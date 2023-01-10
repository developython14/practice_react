import React, { Component } from 'react';
import { Media  , Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {'name':'mustapha' , 'color' :'green'}
        this.handleClick = this.handleClick.bind(this);
        this.handlecolor = this.changecolor.bind(this);
      }
      

      handleClick() {
        this.setState(prevState => ({
          'name': Math.random()
        }));
      }
      changecolor() {
        this.setState(prevState => ({
          'color': 'red'
        }));
      }
    
    render() {
      return <div>
        <h3 style={{color:this.state.color}}>{this.state.name}</h3>
        <Button onClick={this.handleClick}>update</Button>
        <Button onClick={this.handlecolor}>change color</Button>
      </div>
    }
  }


export {Welcome}