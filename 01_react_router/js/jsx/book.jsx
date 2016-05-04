import React from "react";
import ReactDOM from "react-dom";

export default class Book extends React.Component
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
      return (
        <div>
          <h1>{_data.name}</h1>
          <label>热销图书</label>
          <ul>
          {
            _data.info.hot.map((b,index)=>{
              return (
                <li key={index}>{b}</li>
              )
            })
          }
          </ul>
          <label>分类</label>
          <ul>
          {
            _data.info.cate.map((b,index)=>{
              return (
                <li key={index}>{b}</li>
              )
            })
          }
          </ul>
        </div>
      )
    }else{
      return (<h1>Loading....</h1>);
    }
  }
}
