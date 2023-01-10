import React, { Component } from 'react';
import { Media  , Button , Card , CardImg ,CardImgOverlay,CardText ,CardTitle } from 'reactstrap';
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
    };
}
render(){
    const menu = this.state.dishes.map((dish) => {
        return (
            <Card inverse className='col-12 col-sm-5'>
              <CardImg
                alt="Card image cap"
                src={dish.image}
                style={{
                  height: 270
                }}
              />
              <CardImgOverlay>
                <CardTitle tag="h5" className='dark'>
                  {dish.name}
                </CardTitle>
              </CardImgOverlay>
            </Card>
        );
    });

    return (
      <div className="container d-flex flex-row gap-3 flex-wrap">
              {menu}
      </div>
    );
}



}


export default Menu;