import React, { useState, useEffect } from 'react';

const MyFunctionalComponentWithState = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // document.title = `You clicked ${count} times the button is clicked`;
    alert(`This is alert: ${count}`);
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default MyFunctionalComponentWithState;
