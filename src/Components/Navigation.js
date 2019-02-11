import React from "react";
import { Link } from "react-scroll";
import "./Navigation.css";

export default props => (
	<header className="navigation bg-white">
		<nav>
			<Link activeClass="active" className="link" to="home" spy={true} smooth={true} offset={0} duration={500}>
				Home
			</Link>
			<Link activeClass="active" className="link" to="ceremony" spy={true} smooth={true} offset={0} duration={500}>
				Ceremony
			</Link>
			<Link activeClass="active" className="link" to="reception" spy={true} smooth={true} offset={0} duration={500}>
				Reception
			</Link>
			<Link activeClass="active" className="link" to="rsvp" spy={true} smooth={true} offset={0} duration={500}>
				RSVP
			</Link>
		</nav>
	</header>
);
