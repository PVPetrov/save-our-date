import React, { Component } from 'react'
import Welcome from './Welcome'
import Navigation from './Navigation'
import Ceremony from './Ceremony'
import Reception from './Reception'
import RSVP from './RSVP'
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="container">
				<div className="header">
					<Navigation />
				</div>
				<div className="main">
					<Welcome/>
					<Ceremony />
					<Reception />
					<RSVP />
				</div>
			</div>								
		);
	}
}

export default App;