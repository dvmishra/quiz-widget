import React, {useSate, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import questions from './quiz-data.json'

export default function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [gameStatus, setGameStatus] = useState(true);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {

    const nextQuestion = currentQuestion + 1;

    if(isCorrect){
      setScore(score+1);
    }

    if(nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion)
    }
    else{
      setGameStatus(false);
    }
  }

  const replay = () => {
    setCurrentQuestion(0);
    setGameStatus(true);
    setScore(0);
  }

  return (
    <div className="App">
      <div className="shadow">
      {!gameStatus ? (
        <>
        <div className='score-section'>You scored {score} out of {questions.length}</div>
        <button onClick={replay}>Replay</button>
        </>
      ) : (
        <div>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion+1} </span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}> {answerOption.answerText}</button>
            ))}
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
