import React from "react";
import {Form, Button, FormControl} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import axios from 'axios';


class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.state = {
      email: "",
      password: "",
      errMsg: ""
    };
  }

  render() {
    const { email, password, errMsg } = this.state;
    return (
      <Form inline onSubmit={this.handleLoginSubmit.bind(this)}>
        <small>{errMsg}</small>
        <Form.Group>
            <FormControl
            name="email"
            type="email"
            placeholder="Email"
            required={true}
            value={email}
            onChange={this.handleLoginChange}
            />
            <span>   </span>
        </Form.Group>
        <span>   </span>
        <Form.Group>
            <div style={{marginLeft: '0.5rem'}}>
            <FormControl
            name="password"
            type="password"
            placeholder="Password"
            required={true}
            value={password}
            onChange={this.handleLoginChange}
            />
            </div>
            
            <div style={{marginLeft: '1rem'}}>
            <Button type="submit">Login</Button>
            </div>
        </Form.Group>
        
      </Form>
    );
  }

  handleLoginChange(event){
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  token(){
    console.log(localStorage.getItem('auth_token'));
  };

  handleLoginSubmit(event){
    event.preventDefault();
    axios.post(`https://arcane-fjord-29308.herokuapp.com/auth/login`, 
      {
        "email": this.state.email,
        "password": this.state.password
      }).then(res => {
        console.log(res);
        console.log(res.data);
        console.log(res.data['auth_token']);
        localStorage.setItem('auth_token', res.data['auth_token']);
        localStorage.setItem('firstname', res.data['firstname']);
        localStorage.setItem('propic', res.data['propic']);
      }).catch(err =>{
        this.setState({
          errMsg: "email or password is incorrect"
        });
        console.log(err);
      }).then(res => {this.props.history.push("/home");})
      
    
    // var url = config.endpoint + 'login';
    // var data = JSON.stringify({"email":"abc@gmail.com", "password": "qwer"});
    // store.dispatch(fetchItems(url, data, "POST"));
  };


}
//export default MyForm;
export default withRouter(MyForm);
