import React, { Component } from 'react';
import { Media  , Button ,Card ,CardBody, CardImg ,CardImgOverlay,CardText ,CardTitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class DishdetailComponent  extends Component {
    constructor(props){
        super(props);
    }

    render(){
        if (this.props.dish == null){
            return (<div></div>);
        }
        else{
            console.log(this.props.dish.comments);
            const Comments = this.props.dish.comments.map((comm)=>{
                return(<div className='d-flex flex-column'>
                <p>{comm.comment}</p>
                <p>{comm.author}, {comm.date}</p>
                </div>
                )
            })
            return (
                <div className='d-flex flex-column col-12 col-md-5'>
                    <h3>Comments</h3>
                    {Comments}
                </div>
            )
        }

    }


}

export default DishdetailComponent;