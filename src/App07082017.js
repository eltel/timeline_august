import React, { Component } from 'react';
import logo from './TL_200x200.jpg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router'
// import WaveSurfer from 'wavesurfer.js';

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
