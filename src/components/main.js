import React from "react";
import FormComponent from './form-component.js'

import HornBeast from './hornbeast'
import CardColumns from "react-bootstrap/CardColumns";
//import Form from 'react-bootstrap/Form';



class Main extends React.Component {
  render() {
    return (
      <>
      <FormComponent/>


      <CardColumns>
        {this.props.allBeast.map(beast => {
          return (
            <HornBeast
              title={beast.title}
              img_url={beast.image_url}
              showBeast={this.props.showBeast}
              description={beast.description} />

          );
        })
        };

      </CardColumns>
      </>
    )
  }
}

export default Main;