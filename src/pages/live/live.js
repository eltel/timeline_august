import React, { Component } from 'react';
import './live.css';

class Live extends Component {
 render() {
	 let element = document.getElementById("playerContainer").style.display = 'none';
	 let elementLive = document.getElementById("livePlayerContainer").style.display = 'block';
	 let elementChat = document.getElementById("chat").style.display = 'block';
	 return (
     <div className="live">
       <h1>Strictly Live!</h1>
     </div>
   );
 }
}
export default Live;