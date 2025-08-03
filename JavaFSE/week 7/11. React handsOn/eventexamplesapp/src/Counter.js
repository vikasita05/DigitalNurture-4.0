import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(previous => previous + 1);
  };

  const sayHello = () => {
    console.log('Hello! This is a static message.');
  };

  const handleIncrement = () => {
    increment();
    sayHello();
  };

  const decrement = () => {
    setCount(previous => previous - 1);
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>{' '}<br/>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;