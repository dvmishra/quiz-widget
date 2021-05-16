import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import questionsAdd from "./quiz-addition.json";
import questionsSub from "./quiz-subtraction.json";
import { storeData, clearData } from "./storeData";

export default function Quiz({ quiz }) {
  let questions = [];
  switch (quiz) {
    case "simple_math_addition":
      questions = questionsAdd;
      break;
    case "simple_math_subtraction":
      questions = questionsSub;
      break;
    default:
      questions = questionsAdd;
  }

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [gameStatus, setGameStatus] = useState(true);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [option, setOption] = useState(null);
  const [allAnswers, setAllAnswers] = useState([]);
  const handleAnswerButtonClick = (answerOption) => {
    const nextQuestion = currentQuestion + 1;

    if (answerOption.isCorrect) {
      setScore(score + 1);
      setAnswer(answerOption.answerText);
    }
    setTimeout(() => {
      setAnswer(null);
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setGameStatus(false);
        setAllAnswers(
          storeData("scores", {
            total: nextQuestion,
            correctAnswers: score,
          })
        );
      }
    }, 1000);
  };

  const checkOptions = (answerText) => {
    if (answer !== null) {
      if (answerText === answer) return "correct";
      if (answerText !== answer) return "incorrect";
    }
    return "";
  };

  const replay = () => {
    setCurrentQuestion(0);
    setGameStatus(true);
    setScore(0);
  };

  const clearScore = () => {
    clearData("scores");
    setAllAnswers([]);
    replay();
  };

  return (
    <div className="App">
      <div className="shadow">
        {!gameStatus ? (
          <>
            <div className="score-section">
              You scored {score} out of {questions.length}
            </div>
            <button onClick={replay}>Replay</button>
            <button onClick={clearScore}>Clear</button>
          </>
        ) : (
          <div>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1} </span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map(
                (answerOption, index) => (
                  <button
                    key={`${index}`}
                    onClick={() => handleAnswerButtonClick(answerOption)}
                    className={`${checkOptions(answerOption.answerText)}`}
                  >
                    {" "}
                    {answerOption.answerText}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </div>
      <ul>
        {allAnswers.map((e) => (
          <li>
            Total Questions: {e.total} Correct Answers: {e.correctAnswers}
          </li>
        ))}
      </ul>
    </div>
  );
}
