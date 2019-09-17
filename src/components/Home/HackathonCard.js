import React from 'react';
import { Container, Col, Button, Image, Row, ButtonToolbar } from 'react-bootstrap';
import './HackathonCard.css'
class HackathonCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // hackInfo: (props.hackInfo != null) ? props.hackInfo: '------', 
            hackInfo: {
              logo: "data:image/png;base64,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",
              name: "SbuHacks",
              school: "Stony Brook University",
              start_date: "9/20",
              end_date: "9/21",
              city: "Stony Brook",
              state: "NY"
            }
            
        };
      }

      componentDidMount() {
        console.log(this.state)
      }

    render() {
        
        return (

            <div className="content row">
            <div className="hackcard col-md-5 offset-md-1">
                <div className="firstinfo">
                
                  <a href={`/hackathon/${this.state.hackInfo.name}`}><img className="hackImg d-block mx-auto rounded-circle img-fluid" src={this.state.hackInfo.logo}></img></a>
                  <div className="profileinfo">
                      <a href={`/hackathon/${this.state.hackInfo.name}`}><h1>{this.state.hackInfo.name}</h1></a>
                      <i>{this.state.hackInfo.school}</i>
                      <p className="bio">{this.state.hackInfo.start_date} - {this.state.hackInfo.end_date}</p>
                      <p className="bio">{this.state.hackInfo.city}, {this.state.hackInfo.state}</p>
                  </div>
                </div>
            </div>
          </div>

            // <div className="hackathoncard" id="hackathoncard">
            //     <Container>
            //         <Row >
            //             <Col>
            //                 <div className="card shadow">
            //                     <div className="card-body">
            //                         <Row className="align-items-center">
            //                             <div className="hackathonpic">
            //                             <Col className="text-nowrap text-center">
            //                                 <a href={`/hackathon/${this.state.id}`}>
            //                                     <img className="d-block mx-auto rounded-circle img-fluid" src={require("./graysquare.png")}></img>
            //                                 </a>
            //                             </Col>
            //                             </div>
            //                             <Col className="text-center text-lg-left">
            //                                 <h3><strong>{this.state.hackInfo.name} @ {this.state.hackInfo.school}</strong></h3>
            //                                 <br></br>
            //                                 {this.state.hackInfo.num} going
            //                                 <br></br>
            //                                 {this.state.hackInfo.start_date}-{this.state.hackInfo.end_date}
            //                                 <br></br>
            //                                 {this.state.hackInfo.city}, {this.state.hackInfo.state}
            //                             </Col>

            //                         </Row>
            //                     </div>
            //                 </div>
            //             </Col>
            //         </Row>
            //     </Container>
            // </div>
        )
    }

}

export default HackathonCard 