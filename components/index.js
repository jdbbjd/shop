import React from "react"
import ReactDOM from "react-dom"
import {
	Link
} from "react-router"

import "../assets/css/index.css"
import {Icon} from "antd"

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
								<input type="text"/>
								<button>搜索</button>
								
							</div>
						</div>
					</div>

			    </header>
				
				<div id="rightbar">
					<div className="rightbarblank"></div>
					<ul>
						<li>
							<Link to="cart.js" title="">
								<Icon type="shopping-cart" />
								<div>购物车</div>
							</Link>
						</li>
						<li>
							<a href="javascript:;" title="">
								<Icon type="red-envelope" />
								<div>优惠券</div>
							</a>
						</li>
						<li><a href="javascript:;" title="">
								<Icon type="wallet" />
								<div>钱包</div>
							</a>
						</li>
						<li>
							<a href="javascript:;" title="">
								<Icon type="github" />
								<div>足迹</div>
							</a>
						</li>
					</ul>

					<ul className="loutinav">
						<li>
							<a href="cart.html" title="">
								<div>红人</div>
							</a>
						</li>
						<li>
							<a href="javascript:;" title="">
								<div>精选</div>
							</a>
						</li>
						<li><a href="javascript:;" title="">
								<div>特卖</div>
							</a>
						</li>
						<li>
							<a href="javascript:;" title="">
								<div>女装</div>
							</a>
						</li>
						<li>
							<a href="javascript:;" title="">
								<div>女鞋</div>
							</a>
						</li>
						<li>
							<a href="javascript:;" title="">
								<div>美妆</div>
							</a>
						</li>
						<li>
							<a href="javascript:;" title="">
								<div>男友</div>
							</a>
						</li>
						<li className="gototop">
							<a href="#" title="">
								<div>&nbsp;&nbsp;<br/>Top</div>
							</a>
						</li>
					</ul>

				</div>
				
			    <section>
			    	{this.props.children}
			    </section>

			    <footer>
			    <img src="../assets/images/footer.bmp"/>
			    </footer>


				
			</div>

		)
	}
}

export default Index;