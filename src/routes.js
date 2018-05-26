import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import AudioPlayerPage from './pages/mixes/AudioPlayerPage';
import NotFound from './pages/NotFound/NotFound';
import Live from './pages/live/live';

const Routes = (props) => (
 <Router {...props}>
   <Route path="/" component={App}>
				<Route path="/live" component={Live} />
	      <Route path="/mixes" component={AudioPlayerPage} />
       <Route path="*" component={NotFound} />
   </Route>
 </Router>
);
export default Routes;
