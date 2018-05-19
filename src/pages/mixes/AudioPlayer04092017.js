import React, { Component } from 'react';
import Wavesurfer from 'react-wavesurfer';
import './AudioPlayer.css';
// import {Button, IconButton} from 'react-toolbox/lib/button';
import Button from 'react-bootstrap/lib/Button';

require('wavesurfer.js');

var vars = {clip_id:"2dduo643aqtc",transparent:"false",pause:"0",repeat:"1",bg_color:"",fs_mode:"2",no_controls:"0",start_img:"0",start_volume:"100",close_button:"",brand_new_window:"1",auto_hide:"1",stretch_video:"1",player_align:"NONE",offset_x:"",offset_y:"",player_color_ratio:0.6,skinAlpha:"50",colorBase:"#58630e",colorIcon:"#FFFFFF",colorHighlight:"#778f1f",direct:"true",is_responsive:"true",viewers_limit:0,cc_position:"bottom",cc_positionOffset:70,cc_multiplier:0.03,cc_textColor:"#ffffff",cc_textOutlineColor:"#ffffff",cc_bkgColor:"#000000",cc_bkgAlpha:0.7};


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
        <Wavesurfer
          audioFile={'https://s3-sa-east-1.amazonaws.com/timelinemusic/Keith-Anderson-Frequency-Project-001-Launch.mp3'}
		      hideScrollbar={true}
		      barHeight={2}
          pos={this.state.pos}
          onPosChange={this.handlePosChange}
          playing={this.state.playing}
        />
			 <Button className="btn btn-primary" onClick={this.handleTogglePlay}>
    <i className="glyphicon glyphicon-play"></i>
    Play/Pause
  </Button>
      </div>
		 <div>
        <Wavesurfer
          audioFile={'https://s3-sa-east-1.amazonaws.com/cae1/snwdnpt1mp3.mp3'}
		 			hideScrollbar={true}
		     // barHeight={2}
          pos={this.state.pos}
          onPosChange={this.handlePosChange}
          playing={this.state.playing}
        />
			 <Button className="btn btn-primary" onClick={this.handleTogglePlay}>
    <i className="glyphicon glyphicon-play"></i>
    Play/Pause
  </Button>
      </div>
		  <div>
        <Wavesurfer
          audioFile={'https://s3-sa-east-1.amazonaws.com/timelinemusic/Rick-Hopkins-Bubble-Chamber-Sessions-001-Nov-2016-hearthis.at_.mp3'}
		      hideScrollbar={true}
		      barHeight={2}
          pos={this.state.pos}
          onPosChange={this.handlePosChange}
          playing={this.state.playing}
        />
			 <Button className="btn btn-primary" onClick={this.handleTogglePlay}>
    <i className="glyphicon glyphicon-play"></i>
    Play/Pause
  </Button>
      </div>
		 </div>
      );
 }
}
export default AudioPlayer;
