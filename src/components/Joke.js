import React from 'react';

function Joke(props) {
  console.log(props);
  const { questionStyle, answerStyle, question, punchLine } = props.data;

  return (
    <div className="joke">
      <span style={{ visibility: !question && 'collapse' }}>Q: </span>
      <span style={questionStyle}>{question}</span>
      <br />
      <span>A: </span> <span style={answerStyle}>{punchLine}</span>
    </div>
  );
}

export default Joke;
