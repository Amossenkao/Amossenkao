import { Component } from 'react';
import './styles/css/styles.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

class App extends Component {
	render() {
		return (
			<>
				<Header />
				<Hero />
			</>
		);
	}
}

export default App;
