import React, { Component } from 'react';
import {Switch, Route, Redirect, BrowserRouter as Router} from 'react-router-dom';
import { } from 'react-fontawesome';
import ReactGA from 'react-ga';
import Layout from './components/Layout/Layout';
import HomeContainer from './containers/HomeContainer/HomeContainer';
import ExploreContainer from './containers/ExploreContainer/ExploreContainer';
import ResearchContainer from './containers/ResearchContainer/ResearchContainer';
import DataContainer from './containers/DataContainer/DataContainer';
import AboutUsContainer from './containers/AboutUsContainer/AboutUsContainer';
import './App.css';

ReactGA.initialize('UA-128268752-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {

	state = {
		language: 0
	}
	languageHandler = (e) => {
		this.setState({ language: e.target.value });
	}

	render() {
		return (
			<Router>
				<Layout languageHandler={this.languageHandler} lang={this.state.language}>
					<Switch>
						<Route path='/home' render={(props) => <HomeContainer {...props} lang={this.state.language} /> } />
						<Route path='/explore' render={(props) => <ExploreContainer {...props} lang={this.state.language} /> } />
						<Route path='/research' render={(props) => <ResearchContainer {...props} lang={this.state.language} /> } />
						<Route path='/data' render={(props) => <DataContainer {...props} lang={this.state.language} /> } />
						<Route path='/aboutus' render={(props) => <AboutUsContainer {...props} lang={this.state.language} /> } />
						<Redirect from='/' to='/home' />
					</Switch>
				</Layout>
			</Router>
		);
	}
}

export default App;
