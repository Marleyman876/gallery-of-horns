//import { Button } from "bootstrap";
import { Button } from "react-bootstrap";
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
    this.setState({ numberOfHearts:'❤️' });
  }

  render() {
    return (
      <div key={this.props.keyword} >

        <h1> Horn Beasties</h1>

        <h2>{this.props.title}</h2>
        <p>{this.state.numberOfClicks}
          {this.state.numberOfHearts}
        
        </p>

        <img src={this.props.img_url}
        description={this.props.description} 
        title={this.props.title} 
        alt={this.props.title}
        />

        <p>{this.props.description}</p>

        <Button onClick={this.vote}


        >Vote For this Beast!</Button>

      </div >
    )
  }
}

export default HornBeast;