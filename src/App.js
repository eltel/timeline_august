import React, { Component } from 'react';
import logo from './TimelineMusicOscilator-stretch1.png';
import './App.css';
import { Link } from 'react-router'
// import { LinkContainer } from 'react-router-bootstrap'
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
// let deferredPrompt;
//
// window.addEventListener('beforeinstallprompt', (e) => {
//   // Prevent Chrome 67 and earlier from automatically showing the prompt
//   e.preventDefault();
//   // Stash the event so it can be triggered later.
//   deferredPrompt = e;
//
// 	// Update UI notify the user they can add to home screen
//   btnAdd.style.display = 'block';
//
// 	btnAdd.addEventListener('click', (e) => {
//   // hide our user interface that shows our A2HS button
//   btnAdd.style.display = 'none';
//   // Show the prompt
//   deferredPrompt.prompt();
//   // Wait for the user to respond to the prompt
//   deferredPrompt.userChoice
//     .then((choiceResult) => {
//       if (choiceResult.outcome === 'accepted') {
//         console.log('User accepted the A2HS prompt');
//       } else {
//         console.log('User dismissed the A2HS prompt');
//       }
//       deferredPrompt = null;
//     });
// });
// });

class App extends Component {

  render() {
/*		var wavesurfer = WaveSurfer.create({
  container: '#waveform',
  waveColor: 'red',
  progressColor: 'purple'
});

wavesurfer.load('https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3'); */


	/*	var element = document.getElementById("playerChatContainer");
		var elementChild = document.getElementById("svp_player2dduo643aqtc");
		var elementChat = document.getElementById("chatbro");
		var elementParent = document.getElementById("parent");
		elementParent.appendChild(elementChild);

		var elementParent = document.getElementById("parent");
		elementParent.appendChild(elementChild);

		var elementChild = document.getElementById("svp_player2dduo643aqtc");

		var element = document.getElementById("svp_player2dduo643aqtc");

		 */
		/*
		var element = document.getElementById("playerChatContainer");
		var elementChild = document.getElementById("svp_player2dduo643aqtc");
		element.appendChild(elementChild);

		window.onload = function() {
	// element.appendChild(elementChild);
  document.getElementById('svp_player2dduo643aqtc').style.display = 'block';
};*/

	 //   element.display === 'block';

	let element = document.getElementById("playerContainer").style.display = 'block';
	let elementLive = document.getElementById("livePlayerContainer").style.display = 'none';
	let elementChat = document.getElementById("chat").style.display = 'block';

	/*	window.onload = function() {
  document.getElementById('playerChatContainer').style.display = 'block';
};
		*/
    return (
			 <div className="App">
        <div className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
                  </div>
			<div id="navDivLeft" className="navMenu">
      <div className="navDiv">
					<p><Link to="/">Stream</Link></p>
          </div>
      <div  id="navDivCenter" className="navDiv">
         <p><Link to="/live">Live</Link></p>
         </div>
      <div id="navDivRight" className="navDiv">
         <p><Link to="/mixes">Mixes</Link></p>
         </div>
       	</div>
			{this.props.children}
      </div>
    );
  }
}

export default App;
