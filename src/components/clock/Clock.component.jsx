import React, { useEffect, useState } from 'react';
import "./clock.styles.css"

function Clock() {
		const [date, setDate] = useState(new Date());
	  
	   //Replaces componentDidMount and componentWillUnmount
	   useEffect(() => {
		   var timerID = setInterval(() => tick(), 1000);
		return function cleanup() {
			clearInterval(timerID);
		  };
	   });
	  
		 function tick() {
		  setDate(new Date());
		 }
		 
	let hour = date.getHours().toString();
	let minutes = date.getMinutes().toString();
	
	
	
	return (
		<div id="clock" >
			{
				hour.length === 1 && minutes.length === 1 ?
				`${"0" + hour}:${minutes + "0"}`
					
					: hour.length === 1 ?
					`${"0" + hour}:${minutes}`
						
						: minutes.length === 1 ?
						`${hour}:${"0" + minutes}`
							
							: `${hour}:${minutes}`}
		</div>
	)
}

export default Clock;