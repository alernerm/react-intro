import React from 'react';
import ReactDOM from 'react-dom';

function MyInfo() {
  const firstName = 'John';
  const lastName = 'Doe';
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = 'morning';
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = 'afternoon';
  } else {
    timeOfDay = 'night';
  }

  return (
    <div>
      <h1>
        Good {timeOfDay} {`${firstName} ${lastName}`}!
      </h1>
      <h3>It is currently about {date.getHours() % 12} o'clock</h3>
      <p>This is a paragraph with some info about me...</p>
      <ol>
        <li>Philadelphia</li>
        <li>New York</li>
        <li>Chicago</li>
      </ol>
    </div>
  );
}

export default MyInfo;
