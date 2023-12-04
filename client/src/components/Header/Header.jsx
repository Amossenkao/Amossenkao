import { Component } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LightMode from '@mui/icons-material/LightMode';
import DarkMode from '@mui/icons-material/DarkMode';
function SocialLinks() {
	return (
		<section className="social-links flex">
			<a href="/" target="_blank">
				<TwitterIcon />
			</a>
			<a
				href="https://www.linkedin.com/in/amos-senkao/"
				target="_blank"
				rel="noreferrer"
				title="Visit my Linkedin profile"
			>
				<LinkedInIcon />
			</a>
			<a
				href="https://github.com/Amossenkao"
				target="_blank"
				rel="noreferrer"
				title="Visit my Github"
			>
				<GitHubIcon />
			</a>
		</section>
	);
}

function Navigation() {
	return (
		<nav>
			<ul className="nav-links flex">
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/">About me</a>
				</li>
				<li>
					<a href="/">Skils</a>
				</li>
				<li>
					<a href="/">Projects</a>
				</li>
				<li>
					<a href="/">Contact</a>
				</li>
			</ul>
		</nav>
	);
}

function ThemesToggle(props) {
	return (
		<div className="themes-toggle flex" onClick={props.clickHandler}>
			<div className="toggle-icon light-mode active">
				<div>
					<LightMode />
				</div>
			</div>
			<div className="toggle-icon dark-mode">
				<div>
					<DarkMode />
				</div>
			</div>
		</div>
	);
}

class Header extends Component {
	clickHandler = () => {
		document.querySelectorAll('.toggle-icon').forEach((icon) => {
			icon.classList.toggle('active');
		});

		document.body.classList.toggle('dark-mode');
	};
	render() {
		return (
			<header className="header flex">
				<SocialLinks />
				<Navigation />
				<ThemesToggle clickHandler={this.clickHandler} />
			</header>
		);
	}
}

export default Header;
