
import React from "react";
import ReactDOM from "react-dom";
class RadioButton extends React.Component
{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.refs.all&&(this.refs.all.checked=true);
  }
  handleChanged(event){
    var key = Object.keys(this.refs);
    this.props.onChanged({filter:this.props.filter,checked:this.refs[key].checked});
  }
  render(){
    return (
      <label htmlFor={this.props.id}>
        <input type="radio"
        id={this.props.id}
        ref={this.props.id}
        name={this.props.name}
        value={this.props.value}
        filter={this.props.filter}
        onChange={this.handleChanged.bind(this)} />
         {this.props.children}
      </label>
    );
  }
}
export default class RadioGroup extends React.Component{
  constructor(props){
    super(props);
  }
  componentWillMount(){
    this.setState({value:"use"});
  }
  handleChanged(value){
    this.props.onRadioChanged(value);
  }
  render(){
    var children = [];
    this.props.children.map((child,index)=>{
      var item = (<RadioButton key={index}
        id={child.props.id}
        name={child.props.name}
        value={child.props.value}
        filter={child.props.filter}
        onChanged={this.handleChanged.bind(this)}>
        {child.props.children}</RadioButton>);
        children.push(item);
    });
    return (
      <div value={this.state.value}>{children}</div>
    );
  }
}
