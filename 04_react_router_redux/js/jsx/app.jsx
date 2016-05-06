import React from "react";
import ReactDOM from "react-dom";

import {Provider} from "react-redux";
import {createStore} from "redux";
// import {rootRecuder} from "./reducer/indexReducer";
import {filterCarReducer} from "./reducer/carReducer";

import Nav from "./nav";
import Home from "./home";

let store = createStore(filterCarReducer);
// console.log("==first store==",store.getState());
store.subscribe(()=>{
  // console.log("store dispatch==>",store.getState());
});

export default class App extends React.Component
{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <Nav />
        <Provider store={store}>
          {this.props.children}
        </Provider>
      </div>
    );
  }
}
