import { Component } from 'react';
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import Main from './components/main'
import data from './components/data.json'
import SelectedBeast from './components/SelectedBeast.js'




class App extends Component {
  constructor() {
  super()
  this.state = {
    displayProp: false,
    selectBeast:{},
    data:data,
    allBeast:data,

  }
}

  showBeast = (name) => {
    
    const beast = data.find(beast => beast.title === name);

    this.setState({selectBeast: beast, displayProp:true});
  }

  //function to filter 
  
  filterBeast =(hornsNum) =>{
    const hornsArr = this.state.data.filter(beast => hornsNum === beast.horns);

    this.setState({allBeast:hornsArr});
  }

  flipAbeast = () => {
    this.setState({displayProp:false});
  }

  render() {
    return (
      <div>
      <Header />
      <Main allBeast={this.state.allBeast}
        showBeast={this.showBeast}/>
        <SelectedBeast singleBeast={this.state.selectBeast} hide={this.state.displayProp} flipAbeast={this.flipAbeast}/>
      <Footer/>
      </div>
    );
  }

}

export default App;
