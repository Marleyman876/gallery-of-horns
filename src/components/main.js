import React from "react";
import HornBeast from './hornbeast'
import data from './data.json'

class Main extends React.Component {
  render() {
    return (
      <div>
        {data.map(beast => {
          return (
            <HornBeast
              title={beast.title}
              img_url={beast.image_url}
              descrition={beast.description} />

          );
        })
        };
      </div>
    )
  }
}

export default Main;