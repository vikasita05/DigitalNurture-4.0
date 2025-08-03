import React from 'react';
import './OfficeSpace.css';
function OfficeSpace({ item }) {
  let rentColor = item.Rent <= 60000 ? 'textRed' : 'textGreen';
  return (
    <div className="box">
      <h2>{item.Type}, at Affordable Range</h2>
      <img src={item.Image} width="25%" height="25%" alt="Office Space" />
      <h3>Name: {item.Name}</h3>
      <h3 className={rentColor}>Rent: Rs. {item.Rent}</h3>
      <h3>Address: {item.Address}</h3>
    </div>
  );
}
export default OfficeSpace;
