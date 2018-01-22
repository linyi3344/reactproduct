//有空就原生写，没空就酱紫= =
import React, {Component} from 'react';
import "../assets/js/jquery.min.js"
import "../assets/js/zepto.min.js";
import "../assets/js/zepto.kslider.js";
class slider extends Component {
	componentDidMount(){
		$(function(){
			// console.log($('#slider').slider())
			 $('#slider').slider({
			   className: 'slider_box',
			   tick: 4000 //播放间隔
			});
			var imgPieces=$('.m-slider').find('.ks_wrap');
			for(var i=0;i<imgPieces.length;i++){
			  $('.ks_wt').append('<li></li>');
			  $('.ks_wt').find('li').eq(0).addClass('active');
			}
		 });
	}
    render() {
        return (
			<div className="m-slider" id="slider">
				<div className="ks_dbox ks_ts">
						<div className="ks_wrap">
							<img src="src/assets/images/banner1.jpg" alt=""/>
						</div>
						<div className="ks_wrap">
							<img src="src/assets/images/banner2.jpg" alt=""/>
						</div>
						<div className="ks_wrap">
							<img src="src/assets/images/banner3.jpg" alt=""/>
						</div>
				</div>
				<div className="ks-circles">
							<ul className="ks_wt"></ul>
					</div>
			</div>
        )
    }
}

export default slider;