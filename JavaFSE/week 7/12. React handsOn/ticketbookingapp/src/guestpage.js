import React from 'react';

function guestpage() {
  return (
    <div>
      <h2 style={{color:'red'}}>Welcome Guest!</h2>
      <p>Please log in to book flight tickets.</p>
      <p><u>Flight Details:</u></p>
        <b>IndiGo:</b> Chennai to Delhi - 9:00 AM<br/>
        <b>SpiceJet:</b> Mumbai to Goa - 11:00 AM
    </div>
  );
}

export default guestpage;