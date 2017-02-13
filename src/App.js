import tether from 'tether';
global.Tether = tether;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './switch.css';

import Hashmap from './hashmap';
class App extends Component {

  constructor(){
    super();
    this.state = {filtered: true};
  }

  toggle(){
    this.setState({filtered: false});
  }

  render(){
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hashmap Grapher</h2>
          <div className="d-flex justify-content-center align-items-center">
            <button type="button" className="btn btn-primary insert-trigger" data-toggle="modal" data-target="#insert-modal">
              Insert
            </button>
              <label className="d-inline-block switch">
                <input onClick={() => this.setState({filtered: !this.state.filtered})} type="checkbox"/>
                <div className="slider round"></div>
              </label>
          </div>
        </div>
        <div className="container">
          <Hashmap  filtered={this.state.filtered}/>
        </div>
      </div>
    );
  }
}

export default App;
