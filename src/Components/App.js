import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import Welcome from './Welcome'
import Navigation from './Navigation'
import Ceremony from './Ceremony'
import Reception from './Reception'
import RSVP from './RSVP'
import './App.css';

class App extends Component {
	render() {
		return (
			<Grid container direction="column">
				<Grid item>
					<Navigation />
				</Grid>
				<Grid item>
					<Welcome />
					<Ceremony />
					<Reception />
					<RSVP />
				</Grid>
			</Grid>
		);
	}
}

export default App;
