import React, { Component } from 'react';
import Iframe from 'react-iframe'
import './calendar.css';


class Calendar extends Component {
 render() {
   return (
		 
     <Iframe url="http://www.timeline-music.co.uk/calendar/"
        width="100%"
        height="40%"
        display="initial"
        position="relative"
        allowFullScreen/>
   );
 }
}
export default Calendar;
