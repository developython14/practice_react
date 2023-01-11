import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class DishdetailComponent  extends Component {

    turndate(date){
        var ref = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var year = date.slice(0,4);
        var month = date.slice(5,7);
        var day =date.slice(8,10);
        month = parseInt(month)-1;
        return ref[month]+' '+ day+ ', ' +year
    }

    render(){
        if (this.props.dish == null){
            return (<div></div>);
        }
        else{
            const Comments = this.props.dish.comments.map((comm)=>{
                return(<div key={comm.id} className='d-flex flex-column'>
                <p>{comm.comment}</p>
                <p>--{comm.author} , {this.turndate(comm.date)} </p>
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