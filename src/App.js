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

  }
}

  showBeast = (name) => {
    
    const beast = data.find(beast => beast.title === name);

    this.setState({selectBeast: beast, displayProp:true});
  }

  flipAbeast = () => {
    this.setState({displayProp:false});
  }

  render() {
    return (
      <div>
      <Header />
      <Main allBeast={data}
        showBeast={this.showBeast}/>
        <SelectedBeast singleBeast={this.state.selectBeast} hide={this.state.displayProp} flipAbeast={this.flipAbeast}/>
      <Footer/>
      </div>
    );
  }

}

export default App;
