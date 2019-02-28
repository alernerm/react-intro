import React from 'react';
import Joke from './components/Joke';
import jokesData from './data/jokesData';

function JokesContent() {
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

  return (
    <main>
      <h3 style={styles.redColor}>Jokes Component</h3>
      {jokesComponents}
    </main>
  );
}

export default JokesContent;
