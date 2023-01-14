import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Breadcrumb, BreadcrumbItem,
            Button, Form, FormGroup, Label, Input, Col ,FormFeedback} from 'reactstrap';

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
                    <CommentForm/>
                </div>
            )
        }

    }


}



class CommentForm  extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    handleInputChange(event) {
        const target = event.target;
        const firstname = target.value;

    
        this.setState({
            firstname:firstname
        });
    }

    validate(){
        print('function was called')
        const errors = {firstname:''}
        if (this.state.firstname<3){
            errors.firstname = 'name must be greacther to 3'
        }
        else if (this.state.firstname>8){
            errors.firstname = 'NAME mustapha be less than 8'

        }
        return errors

    }

    handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }
              
        render() {
            const errors = this.validate(this.firstname);
            return(
                <Form method='Post' onSubmit={this.handleSubmit}>
                    <Input type='text' value={this.state.firstname} onChange={this.handleInputChange} />
                    <FormFeedback >
                    {errors.firstname}
                    </FormFeedback>
                </Form>

            );
                                
}
            
}

export default DishdetailComponent;