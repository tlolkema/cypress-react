import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Welcome from './components/Welcome/Welcome'
import FrameworksTable from './components/FrameworksTable/FrameworksTable'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <Welcome/>   
        <FrameworksTable/>  
      </div>
    );
  }
}

export default App;
