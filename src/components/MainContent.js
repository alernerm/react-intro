import React from 'react';
import MyInfo from './MyInfo';
import ToDoItem from './ToDoItem';
import Joke from './Joke';

function MainContent() {
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
      <h3 style={styles.redColor}>Jokes Component</h3>
      <Joke
        data={{
          question: 'What do you call a funny mountain?',
          punchLine: 'hill - arious',
          questionStyle: styles.purpleColor,
          answerStyle: styles.aquaColor
        }}
      />
      <Joke
        data={{
          question: 'What goes up when the rain comes down?',
          punchLine: 'An umbrella',
          questionStyle: styles.purpleColor,
          answerStyle: styles.aquaColor
        }}
      />
      <Joke
        data={{
          question: 'Why did the belt go to jail?',
          punchLine: 'Because it held up a pair of pants!',
          questionStyle: styles.purpleColor,
          answerStyle: styles.aquaColor
        }}
      />
      <Joke
        data={{
          question: '',
          punchLine:
            'I totally understand how batteries feel because I’m rarely ever included in things either.',
          questionStyle: styles.purpleColor,
          answerStyle: styles.aquaColor
        }}
      />
      <Joke
        data={{
          question: '',
          punchLine:
            'If you want to catch a squirrel just climb a tree and act like a nut.',
          questionStyle: styles.purpleColor,
          answerStyle: styles.aquaColor
        }}
      />
      <br />
      <br />
      <br />
      <hr />
      <h3 style={styles.redColor}>MyInfo Component</h3>
      <MyInfo />
      <br />
      <br />
      <br />
      <hr />
      <h3 style={styles.redColor}>MyInfo Component</h3>
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

export default MainContent;
