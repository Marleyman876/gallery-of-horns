import React from "react";
import FormComponent from './form-component.js'

import HornBeast from './hornbeast'
import CardColumns from "react-bootstrap/CardColumns";
//import Form from 'react-bootstrap/Form';

class Main extends React.Component {
  render() {
   
    return (
      <>
      <FormComponent 
        filterBeast={this.props.filterBeast}
        allBeast={this.props.allBeast}
       
      />
        <CardColumns>
        {this.props.horns ? this.props.horns.map((beast, index) => {//? is a terinary statement ? is basically an if. 
          return (
            <HornBeast
              title={beast.title}
              img_url={beast.image_url}
              showBeast={this.props.showBeast}
              description={beast.description} 
              key={index}
              />
          );
        }) : this.props.allBeast.map((beast, index) => {
          return (
            <HornBeast
              title={beast.title}
              img_url={beast.image_url}
              showBeast={this.props.showBeast}
              description={beast.description} 
              key={index}
              />
          );
        })
        }

      </CardColumns>
      </>
    )
  }
}








export default Main;