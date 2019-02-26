import React from 'react';

function MyInfo() {
  const firstName = 'John';
  const lastName = 'Doe';
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  const styles = {
    fontFamily: 'Georgia, serif',
    fontSize: 25,
    color: ''
  };

  if (hours < 12) {
    timeOfDay = 'morning';
    styles.color = '#FF4019';
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = 'afternoon';
    styles.color = '#0000FF';
  } else {
    timeOfDay = 'night';
    styles.color = '#006666';
  }

  return (
    <div>
      <h1 style={styles}>
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
