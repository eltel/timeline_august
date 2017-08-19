import React, { Component } from 'react';
import Script from 'react-load-script'

class Stream24 extends React.Component {
	
	render() {
		
		return (
			<div>
			   <div><Script
      url="//play.webvideocore.net/js/dplayer.js"
      onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}
    /></div>
			<div id="svp_player2dduo643aqtc" style="width:820px;height:520px;position:relative;"></div>
			</div>
					 )
	}
	
	handleScriptCreate() {
  this.setState({ scriptLoaded: false })
}
 
handleScriptError() {
  this.setState({ scriptError: true })
}
 
handleScriptLoad() {
  this.setState({ scriptLoaded: true })
}
var vars = {clip_id:"2dduo643aqtc",transparent:"false",pause:"1",repeat:"1",bg_color:"",fs_mode:"2",no_controls:"0",start_img:"0",start_volume:"100",close_button:"",brand_new_window:"1",auto_hide:"1",stretch_video:"1",player_align:"NONE",offset_x:"",offset_y:"",player_color_ratio:0.6,skinAlpha:"50",colorBase:"#58630e",colorIcon:"#FFFFFF",colorHighlight:"#778f1f",direct:"true",is_responsive:"true",viewers_limit:0,cc_position:"bottom",cc_positionOffset:70,cc_multiplier:0.03,cc_textColor:"#ffffff",cc_textOutlineColor:"#ffffff",cc_bkgColor:"#000000",cc_bkgAlpha:0.7};
var svp_player = new SVPDynamicPlayer("svp_player2dduo643aqtc", "", "100%", "100%", {use_div:"svp_player2dduo643aqtc",skin:"3"}, vars);
svp_player.execute();
	
}

export default Stream24