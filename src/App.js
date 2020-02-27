import React, { Component, Fragment } from "react";
import "./App.css";
import Video from './Components/VideoPlayer/VideoPlayer'
import NavBar from'./Components/NavBar/NavBar';
import HeaderSlider from './Components/HeaderSlider/HeaderSlider.jsx';
import ThreeDLoader from './Components/ThreeDLoader/ThreeDLoader';
import ReactDOM from "react-dom";


class App extends Component {


  render() {

    return (

     <Fragment>
       <HeaderSlider/>
       <ThreeDLoader  />
  <NavBar/>
  {/* <Video/> */}
 </Fragment> 

    );
  }
}
export default App;
