import React from "react";
import { Container } from "react-bootstrap";
import {Form} from "react-bootstrap";

class FormComponent extends React.Component{

  // constructor(props){
  //   super(props);

  //   this.state = {
  //     horn: 'numHorns'
  //   };
  // }

  // handleForm = event =>{
  //  this.setState({
  //    username: event.target.value
  //  });
   
  // }
  
  // handleformHorn = horn =>{
  //   if(horn)
  // }
  
  render() {
  
    return(
      <>
      <Container>
        <Form>
          <Form.Group>
            <Form.Label>Select the Number of Horns you want to see:</Form.Label>
            <Form.Control type='text'/>

          </Form.Group>

        </Form>
      </Container> 
      </>
    )
  };
}

export default FormComponent;