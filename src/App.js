import React from 'react';
import Shop from './components/Shop/Shop';
import MyStore from './components/MyStore/MyStore';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
	
	return(
	<div className="App">
		<Router>
			<Routes>
				<Route path="/" element={<Shop />}></Route>
				<Route path="/my-store" element={<MyStore />}></Route>
			</Routes>
		</Router>
	</div>
	)
}

export default App;
