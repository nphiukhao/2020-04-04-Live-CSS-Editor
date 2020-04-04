import React, { Component } from "react";
import "./App.css";

class App extends Component{

  state = {
    style: '',
  }

  // updateCss = (e) => {
  //   e.preventDefault()

  //   console.log( e.target.value)
  //   this.setState({css: e.target.value})
  //   console.log(this.state)
  // }

  changeCss = (e) => {
    e.preventDefault()
    let css = document.getElementById("text")
    console.log(css.value)
    // console.log( e.target.value)
    this.setState({style: "white"})
    console.log('submitting')
    console.log(this.state)

  }
  

  render() {
    return (
      <div className="App">
        <style dangerouslySetInnerHTML={{__html: `* {${this.state}}`}}></style>
        <header>
          <h1>Welcome to my Website</h1>
        </header>
  
        <div className="text-input">
          <textarea id='text' placeholder="color: white;">

          </textarea>
          <button type="submit" onClick={e => this.changeCss(e)}>change</button>
        </div>
      </div>
    );
  }

}

export default App;
