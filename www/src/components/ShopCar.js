import React, {Component} from 'react';
import {Link} from 'react-router';
class ShopCar extends Component {
	constructor(){
		super();
		this.state={
			product:[
				{price:"66",value:false,href:"/src/assets/images/sjlogo.png",productname:"海绵包包",title:"首款海绵包包",color:"黄色",buynum:"1"},
				{price:"88",value:false,href:"/src/assets/images/sjlogo.png",productname:"派大星包包",title:"首款派大星包包",color:"橙色",buynum:"3"}
			]
		};
		this.add=this.add.bind(this);
		this.odd=this.odd.bind(this);
	}
	componentDidMount(){
		//后期获取数据库的数据。。。现在先用假数据模拟
		// let url='/src/data.json';
		// fetch(url).then(
		// res => res.json()
		// ).then(
		// data => this.setState({count:data.msg})
		// );
	}
	add(ev){
		console.log(ev.target.nextsibling)

		// let numadd=this.state.product[0].buynum++;
		// this.setState({
		// 	buynum:numadd,
		// })
	};
	odd(){
		console.log("222")
	};
	render() {
		let product=this.state.product;
        return (
            <div className="margintop">
                <form className="setCmp">
				{
					product.map((item,index)=>{
						return(
							<div key={index}>
								<div className="Cart">
									<div className="payment">
										<input type="radio" className="radio-la" value={item.value} id={index} name="doc-radio-1"/>
										<label htmlFor={index}></label>
									</div>
									<a href="javascript:;" className="select-btn select-btn-t"><img src={item.href} alt=""/>{item.productname}</a>
								</div>

								<article className="confirmOrder">
									<img src="/src/assets/images/cp_gg.png" alt=""/>
									<div className="product-text">
										<span>{item.title}</span>
										<span className="hue">颜色：{item.color}</span>
										<span className="price price-cart">
											￥{item.price}.00
											<div className="norms-content-t norms-content-two">
												<span className="icon norms-out" onClick={this.add}></span>
												<span>{item.buynum}</span>
												<span className="icon norms-add" onClick={this.odd}></span>
											</div>
										</span>
									</div>
								</article>
							</div>
						)
					})
				}
				{/* <div className="Cart">
					<div className="payment">
						<input type="radio" className="radio-la" value="" id="check-2" name="doc-radio-1"/>
						<label for="check-2"></label>
					</div>
					<a href="javascript:;" className="select-btn select-btn-t"><img src="/src/assets/images/sjlogo.png" alt=""/>海绵包包</a>
				</div>
				<article className="confirmOrder">
					<img src="/src/assets/images/cp_gg.png" alt=""/>
					<div className="product-text">
						<span>首款海绵包包</span>
						<span className="hue">颜色：黑色</span>
						<span className="price price-cart">
							￥68.00
							<div className="norms-content-t norms-content-two">
								<span className="icon norms-out"></span>
								<span>1</span>
								<span className="icon norms-add"></span>
							</div>
						</span>
					</div>
				</article> */}
				{/* <div className="Cart">
					<div className="payment">
							<input type="radio" className="radio-la" value="" id="check-3" name="doc-radio-1"/>
							<label for="check-3"></label>
						</div>	
					<a href="javascript:;" className="select-btn select-btn-t"><img src="/src/assets/images/sjlogo.png" alt=""/>海绵包包</a>
				</div>
				<article className="confirmOrder">
					<img src="/src/assets/images/cp_gg.png" alt=""/>
					<div className="product-text">
						<span>首款海绵包包</span>
						<span className="hue">颜色：黑色</span>
						<span className="price price-cart">
							￥68.00
							<div className="norms-content-t norms-content-two">
								<span className="icon norms-out"></span>
								<span>1</span>
								<span className="icon norms-add"></span>
							</div>
						</span>
					</div>
				</article> */}
				</form>
				<nav className="navbar-fixed-bottom navbar-fixed-bottom-cart">
					<div className="container container-cart">
						<div className="navbar-text navbar-left pull-left m-cart-disbursement">		合计：￥136.00
						</div> 
						<a href="javascript:;" className="btn btn-warning navbar-btn pull-right" >去结算</a>
					</div>	
				</nav>
    		</div>
        )
    }
}

export default ShopCar;