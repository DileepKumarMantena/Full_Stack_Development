import React from 'react';

function handleClick() {
  console.log('Button clicked');
}

function ButtonClick() {
  return <button onClick={handleClick}>Click Me</button>;
}

export default ButtonClick;
