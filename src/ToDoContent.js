import React from 'react';
import ToDoItem from './components/ToDoItem';

function ToDoContent() {
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
      <div className="todo-list">
        <ToDoItem
          data={{ name: 'red', text: 'Red Item', fontColor: styles.redColor }}
        />
        <ToDoItem
          data={{
            name: 'blue',
            text: 'Blue Item',
            fontColor: styles.blueColor
          }}
        />
        <ToDoItem
          data={{
            name: 'green',
            text: 'Green Item',
            fontColor: styles.greenColor
          }}
        />
        <ToDoItem
          data={{
            name: 'organe',
            text: 'Organge Item',
            fontColor: styles.orangeColor
          }}
        />
        <ToDoItem
          data={{
            name: 'purple',
            text: 'Purple Item',
            fontColor: styles.purpleColor
          }}
        />
      </div>
    </main>
  );
}

export default ToDoContent;
