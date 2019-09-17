import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this)

    this.state = {
      firstname: "Dummy",
      propic: "https://storage.cloud.google.com/hackersmatcher/default.jpg"
    };
  }

  componentDidMount(){
    if(localStorage.auth_token){
      // console.log(localStorage.auth_token);
      // console.log(localStorage.firstname);
      this.setState({
          firstname: localStorage.firstname,
          propic: localStorage.propic
      })
      //console.log(localStorage.propic);
    }
  }

  logout(){
    localStorage.setItem('auth_token', '');
    localStorage.setItem('firstname', '');
    localStorage.setItem('propic', "https://storage.cloud.google.com/hackersmatcher/default.jpg");
    window.location.replace('https://hackersmatcher.herokuapp.com')
  }

  render() {
    return (
          <div className="NavBar">
            <Navbar fixed="top" bg="light" expand="lg">
              <Navbar.Brand href="/home" >
              <img
              alt=""
              src={require("./Landing/assets/favicon.png")}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            <span>  </span>
            Hacker Matcher
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                
                <Nav.Link href="/add">
                Edit Team
                  </Nav.Link>

              <Nav.Link href="/create">
                Create Team
                  </Nav.Link>

                  <img
                  alt=""
                  src={this.state.propic}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  style={{borderRadius: '50%'}}
                  />

                <NavDropdown 
                title={this.state.firstname}>
                  <NavDropdown.Item href="/account">Account</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={this.logout}>Log out</NavDropdown.Item>
                </NavDropdown>
                
                {/* <Nav.Link href="/chat">
                  <img
                  alt=""
                  src={require("./Landing/assets/chatImage.png")}
                  width="40"
                  height="30"
                  className="d-inline-block align-top"
                />
                Messages
                  </Nav.Link> */}
              </Navbar.Collapse>
            </Navbar>
          </div>
    );
  }
}

export default Header;