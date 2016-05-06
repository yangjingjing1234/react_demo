import React from "react";
import ReactDOM from "react-dom";
import RadioGroup from "./radio";

import {connect} from "react-redux";
import {filterCarAction} from "./actions/carAction";
import {CAR_STATE_ALL,CAR_STATE_USEING,CAR_STATE_UNUSE,CAR_STATE_FIXING,CAR_STATE_OTHER} from "./actionTypes";

class Home extends React.Component
{
  constructor(props){
    super(props);
    this.filterType = {
      "所有":CAR_STATE_ALL,
      "使用中":CAR_STATE_USEING,
      "未使用":CAR_STATE_UNUSE,
      "维修中":CAR_STATE_FIXING,
      "其他":CAR_STATE_OTHER
    }
  }
  componentDidMount() {
    this.props.route.source.then(
      value => this.setState({loading: false, data: value}),
      error => this.setState({loading: false, error: error}));
  }
  radioChanged(value){
    // console.log("==radiochange===",value.filter);
    this.props.dispatch(filterCarAction(value.filter));

    // console.log(this.state);
  }
  render(){
    // console.log("===render===")
    if(this.state){
      let _data = this.state.data;
      return (
        <div>
          <h1>{_data.name}</h1>
          <h4>车辆列表</h4>
          <form>
            <RadioGroup onRadioChanged={this.radioChanged.bind(this)}>
              <option value="all" id="all" filter={CAR_STATE_ALL} name="carstatus">所有</option>
              <option value="use" id="use" filter={CAR_STATE_USEING} name="carstatus">使用中</option>
              <option value="unuse" id="unuse" filter={CAR_STATE_UNUSE} name="carstatus">未使用</option>
              <option value="fix" id="fix" filter={CAR_STATE_FIXING} name="carstatus">维修中</option>
              <option value="other" id="other" filter={CAR_STATE_OTHER} name="carstatus">其他</option>
            </RadioGroup>
          </form>

          <table>
            <thead>
              <tr>
              <th>序列</th>
              <th>车辆名称</th>
              <th>Logo</th>
              <th>车牌号</th>
              <th>车架号</th>
              <th>发动机号</th>
              <th>使用状态</th>
              </tr>

            </thead>
            <tbody>
            {
              _data.carlist.map((repo,index)=>{
                var _filterType = this.filterType[repo.status];
                var _state = this.props.filter;
                if(_state!=CAR_STATE_ALL&&_filterType!==_state){
                  return;
                }
                return (<tr key={index}>
                  <td>{index+1}</td>
                  <td>{repo.carname}</td>
                  <td><img src={repo.logo} /></td>
                  <td>{repo.carnum}</td>
                  <td>{repo.carid}</td>
                  <td>{repo.careng}</td>
                  <td>{repo.status}</td>
                </tr>);
              })
            }
            </tbody>
          </table>
        </div>
      )
    }else{
      return (<h1>Loading....</h1>);
    }
  }
}

export default connect(filterCarAction)(Home);
