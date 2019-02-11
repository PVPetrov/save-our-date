import React, { Component } from 'react'
// import { Grid } from '@material-ui/core'
import Welcome from './Welcome'
import Navigation from './Navigation'
import Ceremony from './Ceremony'
import './App.css';

class App extends Component {
	render() {
		return (
			<div>
				<Navigation />
				<div className="container">
					<Welcome/>
					<Ceremony/>
				</div>
			</div>
		);
	}
}

export default App;
