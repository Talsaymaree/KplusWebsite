import React, { Component, Fragment } from "react";
import "./App.css";
import Video from './Components/VideoPlayer/VideoPlayer'
import NavBar from'./Components/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <Fragment>
  <NavBar/>
  <Video/>
 </Fragment>
    );
  }
}
export default App;
