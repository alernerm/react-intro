import React from 'react';
import MyInfo from './MyInfo';
import ToDoItem from './ToDoItem';
import Joke from './Joke';
import jokesData from '../data/jokesData';
import productsData from '../data/productsData';
import Product from './Product';

function MainContent() {
  const styles = {
    redColor: { color: 'red' },
    blueColor: { color: 'blue' },
    greenColor: { color: 'green' },
    orangeColor: { color: 'orange' },
    purpleColor: { color: 'purple' },
    aquaColor: { color: '#12BDBD' }
  };

  const jokesComponents = jokesData.map(joke => (
    <Joke
      key={joke.id}
      data={{
        question: joke.question,
        punchLine: joke.punchLine,
        questionStyle: styles.purpleColor,
        answerStyle: styles.aquaColor
      }}
    />
  ));

  const productComponents = productsData.map(product => (
    <Product key={product.id} data={{ product }} />
  ));

  return (
    <main>
      <h3 style={styles.redColor}>Products Component</h3>
      {productComponents}
      <br />
      <br />
      <br />
      <hr />
      <h3 style={styles.redColor}>Jokes Component</h3>
      {jokesComponents}
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
