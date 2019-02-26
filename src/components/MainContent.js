import React from 'react';
//import MyInfo from './MyInfo';
import ToDoItem from './ToDoItem';

function MainContent() {
  return (
    <main>
      {/* <MyInfo /> */}
      <div class="todo-list">
        <ToDoItem text="Red" />
        <ToDoItem text="Blue" />
        <ToDoItem text="Green" />
        <ToDoItem text="Organge" />
      </div>
    </main>
  );
}

export default MainContent;
