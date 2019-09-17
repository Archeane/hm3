import React from 'react';
import {Button} from 'react-bootstrap';
//import { Button } from 'evergreen-ui'

class Pt1 extends React.Component {
  render() {
  return (
  <div className="container">
    <div className="pt1">
      <div className="row">
          <div class="col-md-6">
            <h1>
              Hacker Matcher
            </h1>
            <h4>
              Find your perfect hackathon team
            </h4>
            <br></br>
            <Button appearance="primary" className="btn btn-primary btn-lg" id="scrollToSignup" onClick={()=>window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })}>Try It Now</Button>
          </div>
          <div className="col-md-3">
            <img
                alt="gif"
                id="gif"
                src={require("./assets/landing_demo.gif")}
              />
          </div>
          
        
      </div>
    </div>
  </div>
  );
  }
}

export default Pt1;