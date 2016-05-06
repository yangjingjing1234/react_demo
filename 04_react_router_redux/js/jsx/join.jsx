import React from "react";
import ReactDOM from "react-dom";

import Nav from "./nav";
export default class JoinUs extends React.Component
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
    let _html = (
      ()=>{
        if(this.state){
          var _data = this.state.data;
          var _job = (()=>{
            return _data.jobs.map((repo,index)=>{
              return (
                <li key={index}>
                  {repo.name}
                  <ul>
                    {
                      repo.joblist.map((rp,idx)=>{
                        return (
                          <li key={idx}>
                            <em>{rp.title}</em>
                            <p>{rp.content}</p>
                          </li>
                        )
                      })
                    }
                  </ul>
                </li>
              )
            })
          })();
          return(
            <div>
              <h1>{_data.name}</h1>
              <label>地址:</label>
              <a href={"mailto:"+_data.email}>{_data.email}</a>
              <br/>
              <label>部门:</label>
              <ul>{_job}</ul>
            </div>);
        }else{
          return (<h1>Loading...</h1>);
        }
      }
    )();
    return (
      <div>
        <Nav />
        {_html}
      </div>
    )
  }
}
