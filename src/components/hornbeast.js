import React from "react"; 

class HornBeast extends React.Component{
  render(){
    return (
      <div>
        <h1> This is Heimdall the fourth most powerful Asgardian.</h1>
        <p>
        <img src={this.props.img } alt= 'Heimdall Brother to Lady Sif 4th most powerful Asgardian. The Horned Beast!' title= 'Heimdall Brother to Lady Sif 4th most powerful Asgardian. The Horned Beast!'/>

        </p>
      </div>
    )
  }
}

export default HornBeast; 