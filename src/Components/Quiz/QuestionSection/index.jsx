import React, { useContext, useEffect, useRef, useState } from 'react';
import { Button, Card, Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Timer from '../Timer';
import CourseHeader from '../CourseHeader';
import Message from '../Message';
import { FadeInUpAnimate, SlideInRightAnimate, GameOverAnimate, ScoreContainer } from './styled';
import './style.css';
import Spinner from '../Spinner';
import SetTimer from '../Timer/Timer';
import { UserContext } from '../../Layout/Dashboard/UserContext';
import quiz from '../../../images/quiz_board.svg';
import question from '../../../images/question.svg';
import excellent from '../../../images/excellent.svg';
import good from '../../../images/good.svg';
import poor from '../../../images/poor.svg';
import { Queue } from '../../../utilities/Queue';
import {v4 as uuidv4} from "uuid";
import axios from 'axios';
 
const useStyles = makeStyles({
  root: {
    width: 120,
    '& .MuiInputBase-root': {
      fontSize: '3rem',
    },
  },
  currentScore: {
    position: 'absolute',
    float: 'left',
    top: 0,
    left: 0,
    width: 50,
    height: 50,
    backgroundColor: '#8D9EF8',
    borderBottomRightRadius: 50,
  },
  currentScoreText: {
    textAlign: 'left',
    justifyContent: 'center',
    paddingLeft: 10,
    color: 'white',
    fontWeight: 700,
  },
});
 
const frequency = [
  { score: '24', freq: '5' },
  { score: '36', freq: '9' },
  { score: '41', freq: '12' },
  { score: '57', freq: '6' },
  { score: '62', freq: '8' },
  { score: '68', freq: '5' },
  { score: '72', freq: '14' },
  { score: '81', freq: '5' },
  { score: '93', freq: '3' },
];
 
let countValue = frequency.reduce((countValues, obj) => (countValues += Number(obj.freq)), 0);
 
const sortedNth = (frequencyMap, n) => {
  let bucketStartIndex = 0;
  let keys = [];
  frequency.forEach((arrayItem) => {
    keys.push(Number(arrayItem.score));
  });
 
  let values = [];
  frequency.forEach((arrayItem) => {
    values.push(Number(arrayItem.freq));
  });
 
  for (let i = 0; i < keys.length; i += 1) {
    let currentFrequency = values[i];
    let bucketEndIndex = bucketStartIndex + currentFrequency;
    if (n < bucketEndIndex) {
      return keys[i];
    }
    bucketStartIndex = bucketEndIndex;
  }
 
  return keys[keys.length - 1];
};
 
const kthPercentile = (valueFrequencies, k) => {
  const index = (k / 100) * countValue;
  return sortedNth(valueFrequencies, Math.floor(index));
};
 
let percentileTenth = [];
for (let i = 0; i <= 100; i += 10) {
  percentileTenth.push(Number(kthPercentile(frequency, i)));
}
 
const myPercentile = (score) => {
  let myPercentileEndRange = Number(percentileTenth.length - 1);
  for (let i = 1; i < percentileTenth.length; i += 1) {
    if (Number(score) < percentileTenth[i]) {
      myPercentileEndRange = i;
      break;
    }
  }
 
  let myPercentileStartRange = myPercentileEndRange - 1;
 
  const myPercentileValue = (
    myPercentileStartRange * 10 +
    ((score - percentileTenth[myPercentileStartRange] + 1) /
      (percentileTenth[myPercentileEndRange] - percentileTenth[myPercentileStartRange] + 1)) *
      10
  ).toFixed(2);
  return myPercentileValue < 0 ? 0 : myPercentileValue > 100 ? 100 : myPercentileValue;
};
 
let numberMap = {};
const numberQueue = new Queue(10);
let gameDetails = {};
 
const QuestionSection = ({ game_details, g_id, u_id }) => {
  const classes = useStyles();
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const [numberThree, setNumberThree] = useState(0);
  const [response, setResponse] = useState('');
  const [error, setError] = useState(false);
  const [time, setTime] = useState(Number(game_details.duration));
  const [gameDuration, setGameDuraion] = useState(Number(game_details.duration));
  const [count, setCount] = useState(0);
  const [percentile, setPercentile] = useState(0);
  const [isIntroduction, setIsIntroduction] = useState(true);
  const [game, setGame] = useState(false);
  const [calculatingScore, setCalculatingScore] = useState(true);
  const [finalMessage, setFinalMessage] = useState("");
  const [playId, setPlayId] = useState(uuidv4());
  let username = "";
 
  if(game_details.username == null){
    username = "";
  }
  else{
    username= " "+ game_details.username;
  }
 
  let startTime = new Date().toISOString();
  const { user, setUser } = useContext(UserContext);
 
  const genrateValues = () => {
    let answer;
    let number2 = 0;
    let number1 = 0;
    while (true) {
      
      number1 = 2 + Math.floor(Math.random() * 8);
      number2 = 2 + Math.floor(Math.random() * 8);
      answer = number1 * number2;
 
      if (number1 in numberMap === false) {
        if (!numberQueue.isFull()) {
          numberMap[number1] = 0;
          numberQueue.enqueue(number1);
        } else {
          const node = numberQueue.dequeue();
          delete numberMap[node.value];
          numberQueue.enqueue(number1);
          numberMap[number1] = 0;
        }
        break;
      }
    }
    
    setNumberThree(number1);
    setNumberTwo(answer);
    setNumberOne(number2);
 
   
 
  };
 
  useEffect(() => {
    window.onbeforeunload = (event) => {
      const e = event || window.event;
      e.preventDefault();
 
      if (e) {
        e.returnValue = '';
      }
      return '';
    };
    genrateValues();
  }, []);
 
  const isValidMove = (event) => {
    const input = Number(event.target.value);
    setResponse(event.target.value);
    if (event.target.value === '') {
      setError(false);
    } else if (input !== numberTwo) {
      setError(true);
    } else {
      setTimeout(() => {
        setResponse('');
        genrateValues();
      }, 300);
      setError(false);
      setCount(count + 1);
    }
  };
 
  const calculateLevel = () => {
    let message = "Hi"+username+", Challenge yourself! You are currently at the STARTER level. Aim for "+game_details.challenger_score+" to go to the CHALLENGER LEVEL.";
    
    switch(true){
      case count >= Number(game_details.genius_score):
        message = "Hi"+username+", you were born to be genius! You are at the highet level now. But geniuses never stop, if you want to go further, keep practicing, keep going higher.";
        setFinalMessage(message);
        break;
      case count >= Number(game_details.master_score):
        message = "Hi MASTER"+username+", you are at MASTER level now, Congrats! soon to become a Genius! Master this a little more. Aim for "+game_details.genius_score+" and go to the GENIUS LEVEL.";
        setFinalMessage(message);
        break;
      case count >= Number(game_details.challenger_score):
        message = "Hi"+username+", you are a CHALLENGER now! You are soon to become a Master! Challenge yoruself a little more. Aim for "+game_details.master_score+" and go to the MASTER LEVEL.";
        setFinalMessage(message);
        console.log(message);
        break;
      default:
        setFinalMessage(message);
        break;
  
    }
    console.log(message);
    console.log(count);
    console.log(game_details.challenger_score);
    setCalculatingScore(false);
    setPercentile(myPercentile(count));
  }
 
  function replay() {
    startTime = new Date().toISOString();
    numberQueue.clear();
    numberMap = {};
    setUser(gameDetails);
    setResponse('');
    gameDetails = {};
    setCount(0);
    setGame(true);
    setError(false);
    setCalculatingScore(true);
    setFinalMessage("");
    setPlayId(uuidv4());
  }
 
  const moveToGame = () => {
    startTime = new Date().toISOString();
    setIsIntroduction(false);
    setGame(true);
  };
 
  const setGameTime = (time) => {
    setTime(time);
    setGameDuraion(time);
  };
 
  function _updateTime(remainingTime) {
    setTime(remainingTime);
    if (remainingTime <= 0) {
      setGame(false);
      gameDetails = JSON.parse(JSON.stringify(user))
      gameDetails.games.push({ duration: gameDuration, startTime: startTime, score: count });
    }
  }
 
  const percentileImage = () => {
    if (percentile >= 85) return <img src={excellent} />;
    if (percentile > 60 && percentile < 85) return <img src={good} />;
    if (percentile < 60) return <img src={poor} />;
  };
 
  const updateScore = (playId, count, percentile, gameDuration) => {
 
    const userId = Number(u_id);
    
 
    const payload = {
        "user_id" : userId,
        "game_id" : g_id,
        "play_id" : playId,
        "score" : count,
        "percentile" : percentile,
        "duration" : gameDuration
    }
 
    axios.post(`https://profved.com/wp-json/wp-json/wp/v1/games/`, { payload })
      .then(response => {
 
      })
  }
 
  return (
    <>
      <CourseHeader heading={game_details.name} />
      {isIntroduction ? (
        <>
          {/* <img src={quiz} width="283" height="auto" className="quiz-image" /> */}
          <SlideInRightAnimate>
            <Message>
              <Typography
                style={{ fontWeight: 400, color: '#5564CC', marginBottom: 10 }}
                variant="h4"
              >
                {game_details.description}
              </Typography>
 
              <div style={{ paddingTop: '5px', fontWeight: 200, color: '#5564CC' }}>
                <Typography variant="h6">
                {game_details.introduction}
                </Typography>
              </div>
            </Message>
            <div className="start-game-container">
              {/* <SetTimer setTime={setGameTime} /> */}
              <Button
                color="primary"
                variant="contained"
                style={{ marginTop: 10 }}
                onClick={moveToGame}
              >
                <Typography variant="h6">Let's Go</Typography>
              </Button>
            </div>
          </SlideInRightAnimate>
        </>
      ) : game ? (
        <>
          <FadeInUpAnimate>
            {/* <span className="emoji hourglass"/> */}
            <Timer
              duration={gameDuration}
              updateDuration={(remainingTime) => _updateTime(remainingTime)}
            />
            <Message className="question-section">
              <div className={classes.currentScore}>
                <div className={classes.currentScoreText}> {count} </div>
              </div>
              <Grid>
              <Typography variant="h3" display="inline" style={{ padding: 5 }}>
                  {numberThree}
                </Typography>
                <Typography variant="h3" display="inline" style={{ padding: 5 }}>
                  x
                </Typography>
                <Typography variant="h3" display="inline" style={{ padding: 5 }}>
                  {numberOne}
                </Typography>
                <Typography variant="h3" display="inline" style={{ padding: 5 }}>
                  =
                </Typography>
                <Typography variant="h3" display="inline" style={{ padding: 5 }}>
                  <TextField
                    autoFocus
                    multiline={false}
                    rowsMax={1}
                    className={classes.root}
                    inputProps={{
                      style: {
                        padding: 0,
                        border: `${error ? '2px' : '1px'} solid ${error ? 'red' : 'black'}`,
                      },
                      maxLength: 3,
                      inputMode: 'numeric',
                    }}
                    error={error}
                    value={response}
                    onChange={(event) => isValidMove(event)}
                  />
                </Typography>
                
              </Grid>
            </Message>
          </FadeInUpAnimate>
        </>
      ) : (
        <SlideInRightAnimate>
          <Message>
            {
              updateScore(playId, count, percentile, Number(game_details.duration))
            }
            <GameOverAnimate>
              <Typography
                variant="h3"
                display="inline"
                style={{
                  textTransform: 'uppercase',
                  fontFamily: "'Press Start 2P', cursive",
                  fontSize: '3em',
                }}
              >
                Game Over
              </Typography>
            </GameOverAnimate>
 
            <Typography variant="h4">Your score: {count}</Typography>
            {
              calculatingScore ? (
                <>
                <Typography variant="h4">
                  Hi{username}, We are calculating your score, Just give us sometime...
                  {calculateLevel()}
                </Typography>
                  {finalMessage}
                </>
 
              ) : 
              
              (
                <>
                <Typography variant="h4">
                  {finalMessage}
                </Typography>
                </>
              )
 
            }
            <Typography variant="h4">
              {/* Your percentile: {percentile} */}
              {/* {percentileImage()} */}
              {/* You were compared against score of{' '}
              {countValue} peers. */}
            </Typography>
            {user.games.length > 0 && (
              <ScoreContainer>
                <Typography variant="h5">
                  <div style={{ borderBottom: '1px solid black' }}>Previous Scores</div>
 
                  <div style={{ maxHeight: '150px', overflowY: 'auto' }}>
                    {user.games.map((game) => {
                      return (
                        <li>
                          Duration: {Number(game.duration) / 60} mins, Score: {game.score}
                        </li>
                      );
                    })}
                  </div>
                </Typography>
              </ScoreContainer>
            )}
          </Message>
          <div className="start-game-container">
            {/* <SetTimer setTime={setGameTime} /> */}
            <Button color="primary" variant="contained" style={{ marginTop: 10 }} onClick={replay}>
              <Typography variant="h6">Play Again</Typography>
            </Button>
          </div>
        </SlideInRightAnimate>
      )}
    </>
  );
};
 
export default QuestionSection;