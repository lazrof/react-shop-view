import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Item from '../Item';
import MiniCart from '../MiniCart';
import shopData from '../../shop-data.json';


const App = () => {
	
	const [state, setState] = useState(shopData);
	const [showCart, setShowCart] = useState(false);

	const toggleMiniCart = (cartActive) => {
		setShowCart(cartActive)
		
	}

	const cartItemActions = (itemData, action) => {

		for (var i = 0; i < state.items.length; i++) {
			
			if (state.items[i].id === itemData.id) {

				switch (action) {
					case 'add':
						state.items[i].in_cart = true;
						break;
					case 'remove': 
						state.items[i].in_cart = false;
						break;

					default:
						
				}
				

			}
		}
		
		setState(state);

	}

	const NavBarHandler = () => {
		
		return <NavBar toggleMiniCart={toggleMiniCart} cartActive={showCart} />	
	}

	const MiniCartHandler = () => {
		let itemsInCart = [];
		
		state.items.forEach( item => {
			if (item.in_cart) {
				itemsInCart.push(item);
			}
		})

		return (
			<MiniCart 
				showCart={showCart} 
				items={itemsInCart} 
				closeCallback={toggleMiniCart} 
				cartItemActionsCallback={cartItemActions} 
			/>
		)

	}
	
	const ItemsHandler = () => {

		return (
			state.items.map(item =>
				
				<Item
					key={item.name}
					cartItemActionsCallback={cartItemActions}
					toggleMiniCartCallback={toggleMiniCart}
					itemData={item}
					inCart={item.in_cart}
				/>
			)
		)
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
						<ItemsHandler />
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

			<MiniCartHandler/>

		</div>
	)
}

export default App;
