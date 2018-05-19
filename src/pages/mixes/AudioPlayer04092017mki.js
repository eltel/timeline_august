import React, { Component } from 'react';
// import Wavesurfer from 'react-wavesurfer';
import './AudioPlayer.css';
// import {Button, IconButton} from 'react-toolbox/lib/button';
// import Button from 'react-bootstrap/lib/Button';
import ReactAudioPlayer from 'react-audio-player';

// require('wavesurfer.js');

const playerStyle = {
boxShadowhadow: 15 15 20 rgba(0,0, 0, 0.4);
transform: scale(1.05);
};


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
	 
	 
	 let element = document.getElementById("playerContainer").style.display = 'none';
	 
	 let elementChat = document.getElementById("chat").style.display = 'none';

/*	 window.onload = function() {
  document.getElementById('playerChatContainer').style.display = 'none';
};*/
	
   return (
		 <div>
		 <div>
        <ReactAudioPlayer
  src="https://s3-sa-east-1.amazonaws.com/timelinemusic/Keith-Anderson-Frequency-Project-001-Launch.mp3"
  style={playerStyle}
  controls
	/>
      </div>
		 <div>
        <ReactAudioPlayer
  src="https://s3-sa-east-1.amazonaws.com/timelinemusic/Rick-Hopkins-Bubble-Chamber-Sessions-001-Nov-2016-hearthis.at_.mp3"
  controls
	/>
      </div>
		 
		 		 <div>
        <ReactAudioPlayer
  src="https://s3-sa-east-1.amazonaws.com/timelinemusic/Steve-Wellings-Frequency-Project-001-Launch-MIX-Nov-2016-hearthis.at_.mp3"
  controls
	/>
		 </div>
      		 	 </div>
      );
 }
}
export default AudioPlayer;
