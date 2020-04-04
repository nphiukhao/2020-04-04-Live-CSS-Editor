import React, { Component } from "react";
import "./App.css";

class App extends Component{

  state = {
    title: 'color',
    css: 'grey'
  }

  updateCss = (e) => {
    e.preventDefault()

    console.log( e.target.value)
    this.setState({css: e.target.value})
    setTimeout(function() {
      alert('changing css now!');
    }, 3000);
  }

  changeCss = (e) => {
    e.preventDefault()
    console.log( e.target.value)
    this.setState({css: e.target.value})
    console.log('submitting')

  }

  render() {
    return (
      <div className="App" style={{color: 'black'}}>
        <header>
          <h1>Welcome to my Website</h1>
        </header>
  
        <div className="text-input">
          <textarea onChange={e => this.updateCss(e)} placeholder="color: white;">

          </textarea>
          <button type="submit" onClick={e => this.changeCss(e)}>change</button>
        </div>
      </div>
    );
  }

}

export default App;
