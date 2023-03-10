import React, { Component } from 'react';
import { Navbar , NavLink ,NavItem ,NavbarBrand,NavbarToggler,Nav,Collapse } from 'reactstrap';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import {Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }
  render() {
    return(
    <React.Fragment>
                  <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                            <NavItem>
                                <Link className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</Link>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Ristorante con Fusion</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>
               </div>
           </div>
    </React.Fragment>
    );
  }
}

export default Header;