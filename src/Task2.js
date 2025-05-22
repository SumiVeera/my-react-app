import React from 'react';
import CustomButton from './CustomButton';


function Task2() {
  const handleClick = () => {
    alert('Button was clicked!');
  };

  return (
    <div style = {{ padding: '2rem' }}>
      <CustomButton label="Click Me" onClick={handleClick} />
    </div>
  );
 
}


export default Task2;
