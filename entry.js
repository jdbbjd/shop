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


//组件引入
import Index from "./components/index.js"




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
			
		</Route>
	</Route>
</Router>, document.getElementById("app"));