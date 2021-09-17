import React from 'react';
import logo from '../../HeaderImage.png';

export default class Header extends React.Component {

  render() {
    return <img src={logo} id="Header" className="Header" alt="Cypress" ></img>;  
  }
}
