
import { Card } from "react-bootstrap";
import React from "react";


//Create state inside of the HornedBeast component that keeps track of the number of times an image was clicked.
class HornBeast extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      numberOfHearts: '',
      numberOfClicks: 0,
    }

  }

  vote = () => {
    this.setState({ numberOfClicks: this.state.numberOfClicks + 1 });
    this.setState({ numberOfHearts: '❤️' });
    this.props.showBeast(this.props.title)
  }

  render() {
    return (
      <Card onClick={this.vote}>
        <Card.Img variant="top" src={this.props.img_url} Card style={{ width: '100%' }}></Card.Img>
        <Card.Body>
          <Card.Title>{this.props.Title}</Card.Title>
          <Card.Text>
            {this.props.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          {this.state.numberOfClicks}
          {this.state.numberOfHearts}

        </Card.Footer>
      </Card>
    )
  }
}

export default HornBeast;