import React, { Component } from 'react';
import NavBar from './components/NavBar';
import ProductItem from './components/ProductItem';
import './styles/custom/global.css';
import MiniCart from './components/MiniCart';

class App extends Component {

	constructor() {
		super();
		this.state = {}
		//this.handleAddToDo = this.handleAddToDo.bind(this);

	}

	render() {

		return (
			<div className="app">
				<NavBar/>
				<div className="container">
					<div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
						<h1 className="display-4">Albums</h1>
						<p className="lead">Best albums ever made.</p>
					</div>
				</div>

				<div className="container pb-5">
					<div className="row">
						<ProductItem />
						<ProductItem />
						<ProductItem />
						<ProductItem />
						<ProductItem />
						<ProductItem />
						<ProductItem />
						<ProductItem />
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

				<MiniCart />

			</div>
		)
	}
}

export default App;
