import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import MyForm from '../Landing/MyForm';

class NavigationBar extends React.Component {

  render() {
    return (
          <div className="NavBar">
            <Navbar fixed="top" bg="light" expand="lg">
                <Navbar.Brand href="/">
                <img
                alt=""
                src={require("../Landing/assets/favicon.png")}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              <span>   </span>  
              Hacker Matcher
                </Navbar.Brand>
          
            </Navbar>
          </div>
    );
  }
}

export default NavigationBar;