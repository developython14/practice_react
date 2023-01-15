import React, { Component } from 'react';
import {Card ,CardBody, CardImg ,CardImgOverlay,CardText ,CardTitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DISHES } from './dishes';
import DishdetailComponent from './DishdetailComponent';



class Menu extends Component {
constructor(props){
    super(props);
    this.state = {
        dishes: DISHES,
           selected_dish:null
    };
}

render_dish(dish){
    if (dish ==null){
        return (<div></div>)
    }
    else{
        return (<Card className='col-12 col-md-5'
       
          >
            <img
              alt="Sample"
              src={dish.image}
            />
            <CardBody>
              <CardTitle tag="h5">
               {dish.name}
              </CardTitle>
              <CardText>
                {dish.description}
              </CardText>
            </CardBody>
          </Card>)
    }
}
selected_dish(dish){
    this.setState({selected_dish:dish})

}
render(){
    const menu = this.state.dishes.map((dish) => {
        return (
            <Card key={dish.id} inverse className='col-12 col-md-5' onClick={()=>{this.selected_dish(dish)}}>
              <CardImg
                alt="Card image cap"
                src={dish.image}
                style={{
                  height: 270
                }}
              />
              <CardImgOverlay>
                <CardTitle tag="h4" style={{color:'black'}}>
                  {dish.name}
                </CardTitle>
              </CardImgOverlay>
            </Card>
        );
    });

    return (
      <div className="container d-flex flex-row gap-3 flex-wrap">
              {menu}
              
              {this.render_dish(this.state.selected_dish)}
              <DishdetailComponent dish = {this.state.selected_dish} />
      </div>
    );
}



}
