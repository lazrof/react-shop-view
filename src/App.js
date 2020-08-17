import React from 'react';
import Shop from './components/Shop/Shop';
import MyStore from './components/MyStore/MyStore';
import { HashRouter as Router, Switch, Route } from "react-router-dom";

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
