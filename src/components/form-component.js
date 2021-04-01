import React from 'react';
import Container from "react-bootstrap/Container";
import  Form  from "react-bootstrap/Form";

class FormComponent extends React.Component {

  handleForm = event => {
    if (event.target.value === "Show All") {
      return this.props.filterBeast("all");
    } else {
      const hornSelect = +event.target.value;
      const hornsArr = this.props.allBeast.filter(beast => beast.horns === hornSelect);
      this.props.filterBeast(hornsArr);

    }

  }


  render() {

    return (
      <>
        <Container>
          <Form>
            <Form.Group>
              <Form.Label>Select the Number of Horns you want to see:</Form.Label>
              <Form.Control as="select"
                onChange={this.handleForm}>
                <option>Show All</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>100</option>
              </Form.Control>
            </Form.Group>

          </Form>
        </Container>
      </>
    )
  }
}

export default FormComponent;