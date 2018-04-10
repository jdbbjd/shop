import React from "react"

import "../assets/css/home.css"
import 'antd/dist/antd.css';
import {Carousel,Icon,Button} from 'antd';


class Home extends React.Component{
	constructor(props){
		super(props)
		
	}
	render(){
		return(
			<div>

				<div id="nav">
					<ul>
						<li>全部分类</li>						
						<li><a href="#">首页</a></li>
						<li><a href="#">闪购</a></li>
						<li><a href="#">限时购</a></li>
						<li><a href="#">团购</a></li>
						<li><a href="#">大包装</a></li>
						<ul>
							<li><Icon type="smile" /><span>点心/蛋糕</span><Icon type="right" /></li>
							<li><Icon type="codepen" /><span>饼干/膨化</span><Icon type="right" /></li>
							<li><Icon type="database" /><span>熟食/肉类</span><Icon type="right" /></li>
							<li><Icon type="database" /><span>坚果/炒货</span><Icon type="right" /></li>
							<li><Icon type="gift" /><span>点心/蛋糕</span><Icon type="right" /></li>
							<li><Icon type="codepen" /><span>熟食/肉类</span><Icon type="right" /></li>
							<li><Icon type="api" /><span>坚果/炒货</span><Icon type="right" /></li>
							<li><Icon type="dashboard" /><span>饼干/膨化</span><Icon type="right" /></li>
							<li><Icon type="github" /><span>饼干/膨化</span><Icon type="right" /></li>
							<li><Icon type="slack" /><span>饼干/膨化</span><Icon type="right" /></li>
							<li><Icon type="dropbox" /><span>饼干/膨化</span><Icon type="right" /></li>
							<li><Icon type="dropbox" /><span>饼干/膨化</span><Icon type="right" /></li>
						</ul>
					</ul>
				</div>

				<div id="swiper">
					<Carousel autoplay>
					    <div><img src="http://demo.cssmoban.com/cssthemes4/amz_02_adp/two/images/ad6.jpg" /></div>
					    <div><img src="http://demo.cssmoban.com/cssthemes4/amz_02_adp/two/images/ad7.jpg" /></div>
					    <div><img src="http://demo.cssmoban.com/cssthemes4/amz_02_adp/two/images/ad8.jpg" /></div>
					    <div><img src="http://demo.cssmoban.com/cssthemes4/amz_02_adp/two/images/ad5.jpg" /></div>
					</Carousel>

					<div id="swiper_bot">
						<h3>商城头条</h3>
						<Button>登录</Button>
						<Button>注册</Button>
					</div>

				</div>


			</div>
		)
	}
}

export default Home;