import React, { Component } from 'react';
import { Media  , Button , Card ,CardBody, CardImg ,CardImgOverlay,CardText ,CardTitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class Menu extends Component {
constructor(props){
    super(props);
    this.state = {
        dishes: [
            {
              id: 0,
              name:'Uthappizza',
              image: 'assets/images/uthappizza.png',
              category: 'mains',
              label:'Hot',
              price:'4.99',
              description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        },
           {
              id: 1,
              name:'Zucchipakoda',
              image: 'assets/images/zucchipakoda.png',
              category: 'appetizer',
              label:'',
              price:'1.99',
              description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        },
           {
              id: 2,
              name:'Vadonut',
              image: 'assets/images/vadonut.png',
              category: 'appetizer',
              label:'New',
              price:'1.99',
              description:'A quintessential ConFusion experience, is it a vada or is it a donut?'                        },
           {
              id: 3,
              name:'ElaiCheese Cake',
              image: 'assets/images/elaicheesecake.png',
              category: 'dessert',
              label:'',
              price:'2.99',
              description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        }
           ],
           selected_dish:null
    };
}

render_dish(dish){
    if (dish ==null){
        return (<div></div>)
    }
    else{
        return (<Card
            style={{
              width: '18rem'
            }}
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
            <Card inverse className='col-12 col-md-5' onClick={()=>{this.selected_dish(dish)}}>
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
      </div>
    );
}



}


export default Menu;