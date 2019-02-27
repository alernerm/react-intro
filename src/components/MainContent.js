import React from 'react';
//import MyInfo from './MyInfo';
import ToDoItem from './ToDoItem';

function MainContent() {
  const styles = {
    redColor: { color: 'red' },
    blueColor: { color: 'blue' },
    greenColor: { color: 'green' },
    orangeColor: { color: 'orange' }
  };

  return (
    <main>
      {/* <MyInfo /> */}
      <div className="todo-list">
        <ToDoItem data={{ text: 'Red Item', fontColor: styles.redColor }} />
        <ToDoItem data={{ text: 'Blue Item', fontColor: styles.blueColor }} />
        <ToDoItem data={{ text: 'Green Item', fontColor: styles.greenColor }} />
        <ToDoItem
          data={{ text: 'Organge Item', fontColor: styles.orangeColor }}
        />
      </div>
    </main>
  );
}

export default MainContent;
