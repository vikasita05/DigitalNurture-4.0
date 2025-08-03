import React, { useState } from 'react';

function Currencyconvertor() {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState(null);

  const handleSubmit = () => {
    const rate = 0.011;
    const converted = (parseFloat(rupees) * rate).toFixed(2);
    setEuro(converted);
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2 color='green'>Currency Convertor!!!</h2>
      <input
        type="number"
        placeholder="Enter amount in INR"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
      />
      <button onClick={handleSubmit}>Convert</button>
      {euro && <p>{rupees} INR = {euro} Euro</p>}
    </div>
  );
}

export default Currencyconvertor;
