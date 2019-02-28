import React from 'react';
import MyInfo from './components/MyInfo';

function MyInfoContent() {
  const styles = {
    redColor: { color: 'red' },
    blueColor: { color: 'blue' },
    greenColor: { color: 'green' },
    orangeColor: { color: 'orange' },
    purpleColor: { color: 'purple' },
    aquaColor: { color: '#12BDBD' }
  };

  return (
    <main>
      <h3 style={styles.redColor}>MyInfo Component</h3>
      <MyInfo />
    </main>
  );
}

export default MyInfoContent;
