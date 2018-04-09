import React from "react"
import ReactDOM from "react-dom"
import {
	Router,
	Route,
	Link,
	hashHistory,
	IndexRoute,
	IndexRedirect
} from "react-router"

import $ from "jquery"

import "antd/dist/antd.css"

//组件引入
import Index from "./components/index.js"
import Home from "./components/home.js"



//路由配置
class App extends React.Component {
	render() {
		return (
			<div>
				{this.props.children}
			</div>

		)
	}
}

ReactDOM.render(<Router history={hashHistory}>
	<Route path="/" component={App}>
		<IndexRedirect to="/index"/>
		<Route path="/index" component={Index}>
			<IndexRedirect to="home"/>
			<Route path="home" component={Home}></Route>
		</Route>
	</Route>
</Router>, document.getElementById("app"));