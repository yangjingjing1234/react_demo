import React from "react";
import ReactDOM from "react-dom";

import Nav from "./nav";
export default class About extends React.Component
{
  constructor(props){
		super(props);
	}
  componentDidMount() {
    this.props.route.source.then(
      value => this.setState({loading: false, data: value}),
      error => this.setState({loading: false, error: error}));
  }
  render(){
    let _html = ( ()=>{
      if(this.state){
        let _data = this.state.data;
        return (
          <div>
            <h1>{_data.name}</h1>
            <h3>{_data.address}</h3>
          </div>
        );
      }else{
        return (<h1>Loading...</h1>);
      }
    })();

    return (
      <div>
        <Nav />
        {_html}
      </div>
    )
  }
}
