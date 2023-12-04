import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Hero extends Component {
	componentDidMount() {
		AOS.init();
	}

	render() {
		return (
			<div
				data-aos="fade-up"
				data-aos-duration="1000"
				data-aos-anchor-placement="left-buttom"
				className="about-me"
			>
				<h1>About Me</h1>
				<p>
					Hi there, I'm Amos, a frontend developer from Liberia, West Africa.
					I'm skilled in frontend tecnologies like HTML, CSS, Javascript, as
					well as Node.js, React, Typescript, etc. Please feel free to contact
					me so we can discuss how I can help you.
				</p>
			</div>
		);
	}
}

export default Hero;
