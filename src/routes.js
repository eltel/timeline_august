import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import Stream from './pages/stream/stream';
import NotFound from './pages/NotFound/NotFound';
import Live from './pages/live/live';

const Routes = (props) => (
 <Router {...props}>
   <Route path="/" component={App}>
       <Route path="/stream" component={Stream} />
				<Route path="/live" component={Live} />
       <Route path="*" component={NotFound} />
   </Route>
 </Router>
);
export default Routes;