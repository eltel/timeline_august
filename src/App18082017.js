import React, { Component } from 'react';
import logo from './TL_200x200.jpg';
import './App.css';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
/*import {
  Router,
  Route,
  Link
} from 'react-router'*/
// import WaveSurfer from 'wavesurfer.js';

/*const Nav = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/live">Live</Link></li>
        <li><Link to="/calendar">Calendar</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/live" component={Live}/>
      <Route path="/calendar" component={Calendar}/>
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Live = () => (
  <div>
    <h2>Live</h2>
  </div>
)

const Calendar = () => (
  <div>
    <h2>Calendar</h2>
  </div>
)*/


class App extends Component {
	
  render() {
/*		var wavesurfer = WaveSurfer.create({
  container: '#waveform',
  waveColor: 'red',
  progressColor: 'purple'
});

wavesurfer.load('https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3'); */
    return (
			 <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Timeline Music</h2>
        </div>
        <h1 className="App-intro">
          Timeline Music - Sonic Visions of Futures and Futures Passed, Streaming 24/7 - 365
        </h1>
		
      </div>
    );
  }
}

export default App;
