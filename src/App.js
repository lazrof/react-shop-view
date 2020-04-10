import React, { useState } from 'react';
import NavBar from './components/NavBar';
import ProductItem from './components/ProductItem';
import './styles/custom/global.css';
import MiniCart from './components/MiniCart';
import shopData from './shop-data.json';


const App = () => {
	
	const [state, setState] = useState(shopData);
	const [showCart, setShowCart] = useState(false);

	const toggleMiniCart = (cartActive) => {
		setShowCart(cartActive)
		
	}

	const addToCartCallback = (productItemData, action) => {
		state.cart.push(productItemData)
		setState(state)
		//setState(state.cart.push(productItemData))
	}

	const NavBarHandler = () => {
		
		return <NavBar toggleMiniCart={toggleMiniCart} cartActive={showCart} />	
	}

	const MiniCartHandler = () => {

		return <MiniCart showCart={showCart} items={state.cart} closeCallback={toggleMiniCart} />

	}
	


	return (
		<div className="app" >
			<div className="page">
				<NavBarHandler />
				<div className="container">
					<div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
						<h1 className="display-4">Albums</h1>
						<p className="lead">Best albums ever made.</p>
					</div>
				</div>


				<div className="container pb-5">
					<div className="row">
						{state.items.map(item => <ProductItem key={item.name} parentCallback={addToCartCallback}  itemData={item}/>)}
					</div>
				</div>

				<div className="container">
					<footer className="pt-4 my-md-2 pt-md-4 border-top">
						<div className="row">
							<div className="col-12">
								<small className="d-block mb-3 text-muted text-center">&copy; React Ecommerce 2020</small> 
							</div>
						</div>
					</footer>
				</div>
			</div>

			<MiniCartHandler showCart={showCart} items={state.cart} closeCallback={toggleMiniCart}/>

		</div>
	)
}

export default App;
