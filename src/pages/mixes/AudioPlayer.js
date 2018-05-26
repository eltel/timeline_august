import React, { Component } from 'react';
// import Wavesurfer from 'react-wavesurfer';
 import './AudioPlayer.css';
// import {Button, IconButton} from 'react-toolbox/lib/button';
// import Button from 'react-bootstrap/lib/Button';
//  import ReactAudioPlayer from 'react-audio-player';
import Audio from 'react-audioplayer';
import {playlist} from './playlist.json';

// require('wavesurfer.js');
const styles =  {
       flex: 1,
		//width: 300,
      //  margin: auto,
				marginTop: 20,
	// 	display: 'flex',
	// justifyContent: 'center'
	// // position: relative,
	// left:auto,
	// right:auto;


	}

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
		 <Audio
  // width={500}
  // height={100%}
	// flex={2}
	style={styles}
	fullPlayer={true}
	comment={false}
  autoPlay={false}
  playlist={playlist}
/>
      		 	 </div>
      );
 }
}
export default AudioPlayer;
