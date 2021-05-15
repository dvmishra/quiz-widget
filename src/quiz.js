import React, {useState} from 'react';
import './App.css';
import quizData from './quiz-data.js'

export default function App() {
  const questions = quizData;
  return (
    <h1>{quizData}</h1>
  );
}
