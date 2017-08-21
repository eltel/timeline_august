import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import Calendar from './pages/calendar/Calendar';
import NotFound from './pages/NotFound/NotFound';
import Live from './pages/live/live';

const Routes = (props) => (
 <Router {...props}>
   <Route path="/" component={App}>
				<Route path="/live" component={Live} />
	      <Route path="/calendar" component={Calendar} />
       <Route path="*" component={NotFound} />
   </Route>
 </Router>
);
export default Routes;