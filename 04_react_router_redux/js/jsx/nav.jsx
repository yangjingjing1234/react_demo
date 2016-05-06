import React,{Component} from "react";
import ReactDOM from "react-dom";

// import {Link} from "react-router";
import NavLink from "./navlink";

export default class Nav extends Component
{
	constructor(props){
		super(props);
	}

	componentWillMount(){
		// console.log("===will mounted===");
	}
	componentDidMount(){
		// console.log("===mounted===");
	}
	render(){
		// console.log("===render===");
		return (
			<div>
				<nav className="navbar">
          <ul>
            <li><NavLink to="/" onlyActiveOnIndex>首页</NavLink></li>
						<li><NavLink to="/about">关于</NavLink></li>
						<li><NavLink to="/join">加入我们</NavLink></li>
          </ul>
				</nav>
			</div>
		)
	}
}
