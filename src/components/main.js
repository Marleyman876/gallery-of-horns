import React from "react"; 
import HornBeast from './hornbeast'
import logo from '../horns.jpeg'
class Main extends React.Component{
  render(){
    return (
      <div>
        <HornBeast img={logo}/>
        <HornBeast img={logo}/> 
        
      </div>
    )
  }
}

export default Main; 