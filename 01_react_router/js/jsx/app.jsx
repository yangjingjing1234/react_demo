import React from "react";
import ReactDOM from "react-dom";

import Nav from "./nav.min";
import Home from "./home.min";

export default class App extends React.Component
{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    );
  }
}
