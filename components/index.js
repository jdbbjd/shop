import React from "react"
import ReactDOM from "react-dom"
import {
	Link
} from "react-router"

import "../assets/css/index.css"
import {Input} from "antd"
const Search = Input.Search;

//<Link to={{pathname:'/list',query:{id:item.goodsID}}}>{item.goodsName}</Link>
//<Link to="/other"  activeStyle={active}>其他</Link>

class Index extends React.Component {

	render() {
		return (
			<div>
			    <header>
					<div className="hmtop">
					    <div className="am-container header">
							<ul className="message-l">
								<div className="topMessage">
									<div className="menu-hd">
										<a href="#" target="_top" className="h">亲，请登录</a>
										<a href="#" target="_top">免费注册</a>
									</div>
								</div>
							</ul>
							<ul className="message-r">
								<div className="topMessage home">
									<div className="menu-hd"><a href="#" target="_top" className="h">商城首页</a></div>
								</div>
								<div className="topMessage my-shangcheng">
									<div className="menu-hd MyShangcheng"><a href="#" target="_top"><i className="am-icon-user am-icon-fw"></i>个人中心</a></div>
								</div>
								<div className="topMessage mini-cart">
									<div className="menu-hd"><a id="mc-menu-hd" href="#" target="_top"><i className="am-icon-shopping-cart  am-icon-fw"></i><span>购物车</span><strong id="J_MiniCartNum" className="h">0</strong></a></div>
								</div>
								<div className="topMessage favorite">
									<div className="menu-hd"><a href="#" target="_top"><i className="am-icon-heart am-icon-fw"></i><span>收藏夹</span></a></div>
								</div>
							</ul>
						</div>


						<div className="nav white">
							<div className="logoBig">
								<li><img src="../assets/images/logobig.png" /></li>
							</div>

							<div className="search-bar pr">
								<a name="index_none_header_sysc" href="#"></a>
								<Search placeholder="input search text" enterButton="Search" size="large" />

							</div>
						</div>

						<div className="clear"></div>
					</div>

			    </header>

			    <section>
			    	{this.props.children}
			    </section>


				
			</div>

		)
	}
}

export default Index;