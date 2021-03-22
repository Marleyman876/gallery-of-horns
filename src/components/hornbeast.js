import React from "react";

class HornBeast extends React.Component {
  render() {
    return (
      <div>
        <h1> This is Heimdall the fourth most powerful Asgardian.</h1>

        <h2>{this.props.title}</h2>
        <img src={this.props.img_url} alt={this.props.alt} title={this.props.title} />
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default HornBeast;