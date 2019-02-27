import React from 'react';

function ToDoItem(props) {
  const { fontColor, text, name } = props.data;

  return (
    <div className="todo-item">
      <input type="checkbox" name={name} value={name} />
      <span style={fontColor}>{text}</span>
    </div>
  );
}

export default ToDoItem;
