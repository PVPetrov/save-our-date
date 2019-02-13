import React from "react";
import { Link } from "react-scroll";
import "./index.css";
import { Grid, AppBar, Toolbar, Button } from '@material-ui/core';

export default props => (
	<Grid container>
		<AppBar color="default" position="fixed">
			<Toolbar>
				<Grid container justify="center">
					<Button>
						<Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500}>
							Home
					</Link>
					</Button>
					<Button><Link activeClass="active" className="link" to="ceremony" spy={true} smooth={true} offset={0} duration={500}>
						Ceremony
				</Link>
					</Button>
					<Button><Link activeClass="active" className="link" to="reception" spy={true} smooth={true} offset={0} duration={500}>
						Reception
				</Link>
					</Button>
					<Button><Link activeClass="active" className="link" to="rsvp" spy={true} smooth={true} offset={0} duration={500}>
						RSVP
				</Link>
					</Button>
				</Grid>
			</Toolbar>
		</AppBar>
	</Grid>
);
