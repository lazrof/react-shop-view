import React, { useState } from 'react';
import Shop from './components/Shop/Shop';
import MyStore from './components/MyStore/MyStore';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';

const App = () => {
	
	return(
	<div className="App">
		<Router>
			<Switch>
				<Route exact path="/" component={Shop} />
				<Route exact path="/my-store" component={MyStore} />
			</Switch>
		</Router>
	</div>
	)
}

export default App;
