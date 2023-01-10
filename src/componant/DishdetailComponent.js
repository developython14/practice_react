import React, { Component } from 'react';
import { Media  , Button ,Card ,CardBody, CardImg ,CardImgOverlay,CardText ,CardTitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class DishdetailComponent  extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const comments = this.props.dish.comments.map((comment) => {
            return (<p>comment.comment</p>);
        });
        return (
            <div className='d-flex flex-column col-12 col-md-5'>
                <h3>Comments</h3>
                {comments}
            </div>
        )
    }


}

export default DishdetailComponent;