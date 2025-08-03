import React from 'react';
function welcome() {
  const greet = (msg) => {
    alert(msg);
  };

  return (
    <div style={{ margin: '20px' }}>
      <button onClick={() => greet("Welcome!")}>Say welcome</button>
    </div>
  );
}

export default welcome;