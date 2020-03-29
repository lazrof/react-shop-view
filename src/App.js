import React from 'react';
import './styles/custom/global.css';

function App() {
	return (
		<div className="app">
			<div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
				<h5 className="my-0 mr-md-auto font-weight-normal">React Ecommerce</h5>
				<nav className="my-2 my-md-0 mr-md-3">
					<a className="pt-2 px-4 text-dark" href="#"><i className="fas fa-user"></i></a>
					<a className="pt-2 px-5 text-dark" href="#"><i className="fas fa-shopping-cart"></i></a>
				</nav>
			</div>

			<div className="container">
				<div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
					<h1 className="display-4">Albums</h1>
					<p className="lead">Best albums ever made.</p>
				</div>
			</div>

			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<div className="item">
							<img className="img-fluid" src={require('./img/daft-punk.jpg')} alt=""/>
						</div>
					</div>
					<div className="col-md-4">
						<div className="item">
							<img className="img-fluid" src={require('./img/daft-punk.jpg')} alt="" />
						</div>
					</div>
					<div className="col-md-4">
						<div className="item">
							<img className="img-fluid" src={require('./img/daft-punk.jpg')} alt="" />
						</div>
					</div>
				</div>
			</div>

			<div className="container">
				<footer className="pt-4 my-md-5 pt-md-5 border-top">
					<div className="row">
						<div className="col-12">
							<img className="mb-2" src="/docs/4.4/assets/brand/bootstrap-solid.svg" alt="" width="24" height="24"/>
							<small className="d-block mb-3 text-muted text-center">&copy; React Ecommerce 2020</small> 
						</div>
					</div>
				</footer>
			</div>

			<div id="myModal" className="modal">
				<div className="modal-content">
					<span className="close">&times;</span>
					<p>Some text in the Modal..</p>
				</div>
			</div>

		</div>
	);
}

export default App;
