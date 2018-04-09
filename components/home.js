import React from "react"

import "../assets/css/home.css"
import 'antd/dist/antd.css';
import {Carousel,Icon} from 'antd';



class Home extends React.Component{
	constructor(props){
		super(props)
		
	}
	render(){
		return(
			<div>

				<div id="nav">
					<ul>
						<li>
							<span>全部分类</span>
							<ul>
								<li><Icon type="codepen" /><span>点心/蛋糕</span><Icon type="right" /></li>
							</ul>
						</li>
						<li>首页</li>
						<li>闪购</li>
						<li>限时购</li>
						<li>团购</li>
					</ul>
				</div>

				<div id="swiper">
					<Carousel autoplay>
					    <div><img src="http://demo.cssmoban.com/cssthemes4/amz_02_adp/two/images/ad6.jpg" /></div>
					    <div><img src="http://demo.cssmoban.com/cssthemes4/amz_02_adp/two/images/ad7.jpg" /></div>
					    <div><img src="http://demo.cssmoban.com/cssthemes4/amz_02_adp/two/images/ad8.jpg" /></div>
					    <div><img src="http://demo.cssmoban.com/cssthemes4/amz_02_adp/two/images/ad5.jpg" /></div>
					  </Carousel>
				</div>


			</div>
		)
	}
}

export default Home;