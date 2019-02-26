import React from 'react';

function ToDoItem() {
  // const styles = {
  //   redColor: { color: 'red' },
  //   blueColor: { color: 'blue' },
  //   greenColor: { color: 'green' },
  //   orangeColor: { color: 'orange' }
  // };

  return (
    <div className="todo-item">
      <input type="checkbox" name="red" value="red" />
      <span>Random item place holder</span>

      {/* <input type="checkbox" name="red" value="red" />
      <span style={styles.redColor}>Red</span>
      <br />
      */}
    </div>
  );
}

export default ToDoItem;
