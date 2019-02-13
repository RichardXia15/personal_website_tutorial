import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';
import '../styles/MyNav.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class MyNav extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar fixed="top" color="dark" expand="md">
                    <NavbarBrand href="/">Richard Xia</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="bar-item" href="https://www.linkedin.com/">Linkedin</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="bar-item" href="https://github.com/RichardXia15" target="_blank">GitHub</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default MyNav;