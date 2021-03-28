import React from "react";
import HornBeast from './hornbeast'
import CardColumns from "react-bootstrap/CardColumns";

class Main extends React.Component {
  render() {
    return (
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
    )
  }
}

export default Main;