import React, { Component } from 'react';
import { Media  , Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Welcome extends Component {
    constructor(props) {
        console.log("called from constructor")
        super(props);
        this.state = {'name':'mustapha' , 'color' :'green'}
        this.handleClick = this.handleClick.bind(this);
        this.handlecolor = this.changecolor.bind(this);
      }

      static getDerivedStateFromProps(){
        console.log("called from getDerivedStateFromProps part")

      }

      componentDidMount(){
        console.log("called from componentDidMount part")
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
        console.log("called from redering part")
      return <div>
        <h3 style={{color:this.state.color}}>{this.state.name}</h3>
        <Button onClick={this.handleClick}>update</Button>
        <Button onClick={this.handlecolor}>change color</Button>
      </div>
    }
  }


export {Welcome}