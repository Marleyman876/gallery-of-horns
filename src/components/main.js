import React from "react";
import HornBeast from './hornbeast'
import data from './data.json'
import CardColumns from "react-bootstrap/CardColumns";

class Main extends React.Component {
  render() {
    return (
      <CardColumns>

        {data.map(beast => {
          return (
            <HornBeast
              title={beast.title}
              img_url={beast.image_url}
              description={beast.description} />

          );
        })
        };

      </CardColumns>
    )
  }
}

export default Main;