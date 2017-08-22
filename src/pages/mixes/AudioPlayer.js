import React, { Component } from 'react';
import Wavesurfer from 'react-wavesurfer';
import './AudioPlayer.css';

require('wavesurfer.js');



class AudioPlayer extends Component {
	constructor(props) {
    super(props);
 
    this.state = {
      playing: false,
      pos: 0
    };
    this.handleTogglePlay = this.handleTogglePlay.bind(this);
    this.handlePosChange = this.handlePosChange.bind(this);
  }
  handleTogglePlay() {
    this.setState({
      playing: !this.state.playing
    });
  }
  handlePosChange(e) {
    this.setState({
      pos: e.originalArgs[0]
    });
  }
 render() {
	
   return (
		 <div>
        <Wavesurfer
          audioFile={'https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3'}
          pos={this.state.pos}
          onPosChange={this.handlePosChange}
          playing={this.state.playing}
        />
			 <button class="btn btn-primary" onClick={wavesurfer.playPause()}>
    <i className="glyphicon glyphicon-play"></i>
    Play/Pause
  </button>
      </div>
      );
 }
}
export default AudioPlayer;
