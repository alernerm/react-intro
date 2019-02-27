import React from 'react';

function ToDoItem(props) {
  console.log(props);

  return (
    <div className="todo-item">
      <input type="checkbox" name="red" value="red" />
      <span style={props.data.fontColor}>{props.data.text}</span>
    </div>
  );
}

export default ToDoItem;
