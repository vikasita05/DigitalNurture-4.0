import React from 'react';

function Click() {
  const handleClick = () => {
    alert('I was clicked');
  };

  return (
    <div style={{ margin: '20px' }}>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Click;