import React from "react";
import ReactDOM from "react-dom";

export default class Car extends React.Component
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
    if(this.state){
      let _data = this.state.data;
      return(
        <div>
          <h1>{_data.name}</h1>
          <label>热门</label>
          <ul>
          {
            _data.info.hot.map((repo,index)=>{
              return (<li key={index}>{repo}</li>);
            })
          }
          </ul>
          <label>分类</label>
          <ul>
          {
            _data.info.hot.map((repo,index)=>{
              return (<li key={index}>{repo}</li>);
            })
          }
          </ul>
        </div>
      );
    }else{
      return (<h1>Loading...</h1>)
    }
  }
}
