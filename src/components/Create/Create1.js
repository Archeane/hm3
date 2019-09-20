import React from "react";
import {Form, Button, Col, Row, Container, Modal} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import ReactSearchBox from 'react-search-box'
import axios from 'axios';

class Create1 extends React.Component {
  constructor(props) {
    super(props);
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this);
    this.handleCreateChange = this.handleCreateChange.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
    this.deleteName = this.deleteName.bind(this);

    this.state = {
      modalPop: false,
      btn_disabled: true,
      hack: "",
      idea: "",
      goal: "",
      name: "",
      members: [],
      hackathons: [],
      available: [
          
      ],
      value: "",
      hacker_id: {}
    };
  }

  componentDidMount() {
    var url='https://arcane-fjord-29308.herokuapp.com/hackathons/get';
    var config = {
      headers: {'Authorization': 'Bearer ' + localStorage.auth_token.toString()}
    };
    axios.get(url, config)
      .then(res => {
        console.log(res);
        var hackathons = res.data['hackathons'];
        this.setState({hackathons: hackathons})
      });
  }

  render() {
    const {errMsg, modalPop} = this.state;
    const {available} = this.state;  // write the query here, make a constant of available hackers

    const MemberTags = ({vals}) => (
            <div>
            {
            vals.map((item, index) => ( 
              
                <Button key={index} variant="info" size="sm" disabled>{item}</Button>
                ))
            }
            </div>
      )

        return (
        <div className="create">
          <Container>      
          <h1>Create a Team</h1>
          <br></br>
          <small>{errMsg}</small>
          <br></br>
            <Col > 
              <Row >
              <Form className="crea" onSubmit={this.handleCreateSubmit}>
                  <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Which Hackathon?</Form.Label>
                        <Form.Control as="select" name="hack" value={this.state.hack} onChange={this.handleCreateChange}>
                          <option>Choose...</option>
                            {this.state.hackathons.map((item, index) => ( 
                              <option>{item}</option>
                          ))}
                        </Form.Control>
                    </Form.Group>

                <Form.Group controlId="formGridAddress1">
                  <Form.Label>Project Idea</Form.Label>
                                    <textarea className="form-control" rows="5"
                                    type="text"
                                    name="idea"
                                    placeholder="What is your project about? What are you using to make it? What skill level are you looking
                                    for in a possible teammate?" 
                                    value={this.state.idea}
                                    onChange={(event) => { this.handleCreateChange(event); this.setState({btn_disabled: false});}}
                                    ></textarea>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Choose Teammates (max 3) </Form.Label>
                    <br></br>
                    <small>(Note: please fill in your project idea before selecting teammates)</small>
                    <br></br>
                    <div class="search">
                    
                    <Form.Control as="select" name="value"  value={this.state.value} disabled={this.state.btn_disabled}
                   
                          onChange= {(e) => this.handleDropdown(e)}
                          >
                            <option>Choose...</option>
                            {this.state.available.map((item, index) => ( 
                              
                              <option>{item.value}</option>
                          ))}
                        </Form.Control>
                    </div>

                    <MemberTags vals={this.state.members}/>
                    <br></br>
                    <Button variant="outline-danger" size="sm" onClick={() => this.deleteName()}>Remove Last Added</Button>
                    </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>How important is winning the competition to your team?</Form.Label>
                    <Form.Control as="select" name="goal" value={this.state.goal} onChange={this.handleCreateChange}>
                        <option>Choose...</option>
                        <option>Not that important</option>
                        <option>A bit important</option>
                        <option>Somewhat important</option>
                        <option>Very important</option>
                        <option>The most important</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Team Name</Form.Label>
                    <Form.Control name="name" placeholder="Come up with a cool name!" value={this.state.name} onChange={this.handleCreateChange}>
                        
                    </Form.Control>
                </Form.Group>

                <Button variant="success" type="submit">
                  Create
                </Button>
              </Form> 
            </Row>
                
            </Col>
          </Container>
          <div className="bottom"></div>
        </div>
       
        );
      }

      handleCreateChange(event){
        if (event.target.value !== "Choose...")
            this.setState({
              [event.target.name]: event.target.value,
              
            });
          
        var hackathonSelected = this.state.hack;
        //console.log(this.state.hack)
        var url = "https://arcane-fjord-29308.herokuapp.com/hackathons/"+hackathonSelected+"/getmatch";
        // console.log("hackathonSelected:" + hackathonSelected)
        var config = {
          headers: {'Authorization': 'Bearer ' + localStorage.auth_token.toString()}
        };
        axios.get(url, config)
          .then(res => {
            //console.log(res);
            var hackers = res.data['hackers'];
            this.setState({available: hackers}) // doesnt work, reactsearchbox doesn't rerender on changing available hackers

            var hacker_id = new Map();

            var queries = [];
            for(var i = 0; i < hackers.length; i++){
              var hacker = hackers[i];
              var query = {
                'key': i,
                'value': hacker['value'],
                'id': hacker['id']
              }
              queries.push(query);
              hacker_id.set(hacker['value'], hacker['id']);
            }
            this.setState({
              available: queries,
              hacker_id: hacker_id
            });
          });
      };

  handleCreateSubmit(event){
    event.preventDefault();
        //if (this.state.hack !== "" && this.state.idea !== "" && this.state.goal !== "" && this.state.name !== ""){
        //  console.log(this.state);
          var hackathonSelected = this.state.hack;
          var url = "https://arcane-fjord-29308.herokuapp.com/teams/new";
          var config = {
            headers: {'Authorization': 'Bearer ' + localStorage.auth_token.toString()}
          };

          var members = this.state.members;
          var members_arr = [];
          for(var i = 0; i < members.length; i++){
            members_arr.push(this.state.hacker_id.get(members[i]));
          }
          
          var data = {
            'hackathon': hackathonSelected,
            'members': members_arr || [],
            'name': this.state.name || '',
            'idea': this.state.idea || '',
            'goal': this.state.goal || '',
            'capacity': 4
            //'details': details
          }
          axios.post(url, data, config)
            .then(res => {
              console.log(res);
              //console.log(res.data);
              var teamId = res.data['team_id'];
              this.props.history.push("/team/" + teamId)
            });   
  }


  handleDropdown(e) {
    this.state.value = e.target.value;
    if (this.state.members.length < 3  && this.state.members.indexOf(this.state.value) === -1)
      if (e.target.value !== "Choose...")
           this.setState({ members: this.state.members.concat(this.state.value) })
}



  deleteName(event){
    let members = this.state.members.slice();  
      members.splice(members.length-1, 1);
      this.setState({members}); 
  };

}

export default withRouter(Create1);
