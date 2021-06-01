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

const useStyles = makeStyles({
  root: {
    width: 75,
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
    backgroundColor: 'red',
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

const QuestionSection = ({ duration }) => {
  const classes = useStyles();
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const [numberThree, setNumberThree] = useState(0);
  const [response, setResponse] = useState('');
  const [error, setError] = useState(false);
  const [time, setTime] = useState(300);
  const [gameDuration, setGameDuraion] = useState(300);
  const [count, setCount] = useState(0);
  const [percentile, setPercentile] = useState(0);
  const [isIntroduction, setIsIntroduction] = useState(true);
  const [game, setGame] = useState(false);

  let startTime = new Date().toISOString();
  const { user, setUser } = useContext(UserContext);

  const generateUniqueRandomNumber = (limit) => {
    let number = 0;
    if (limit === 10) number = Math.round(Math.random() * 9);
    else if (limit === 100) number = 10 + Math.round(Math.random() * 89);
    else number = 100 + Math.round(Math.random() * 899);
    if (number in allValues) {
      const answers = [10, 100, 1000];
      limit = answers[Math.floor(Math.random() * answers.length)];
      generateUniqueRandomNumber(limit);
    }
    allValues = { ...allValues, [number]: 0 };
    return number;
  };

  const genrateValues = () => {
    let answer;
    let number1 = 0;
    while (true) {
      const answers = [10, 100, 1000];
      answer = answers[Math.floor(Math.random() * answers.length)];
      number1 = 0;
      switch (answer) {
        case 10:
          number1 = Math.round(Math.random() * 9);
          break;
        case 100:
          number1 = 10 + Math.round(Math.random() * 89);
          break;
        case 1000:
          number1 = 100 + Math.round(Math.random() * 899);
          break;
      }
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
    const number2 = answer - number1;
    setNumberThree(answer);
    setNumberTwo(number2);
    setNumberOne(number1);
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
      setPercentile(myPercentile(count));
    }
  };

  const replay = () => {
    startTime = new Date().toISOString();
    numberQueue.clear();
    numberMap = {};
    setUser(user);
    setResponse('');
    setCount(0);
    setGame(true);
    setError(false);
  };

  const moveToGame = () => {
    startTime = new Date().toISOString();
    setIsIntroduction(false);
    setGame(true);
  };

  const setGameTime = (time) => {
    setTime(time);
    setGameDuraion(time);
  };

  const _updateTime = (remainingTime) => {
    setTime(remainingTime);
    if (remainingTime <= 0) {
      setGame(false);
      user.games.push({ duration: gameDuration, startTime: startTime, score: count });
    }
  };

  const percentileImage = () => {
    if (percentile >= 85) return <img src={excellent} />;
    if (percentile > 60 && percentile < 85) return <img src={good} />;
    if (percentile < 60) return <img src={poor} />;
  };

  return (
    <>
      <CourseHeader heading="Course Introduction" />
      {isIntroduction ? (
        <>
          <img src={quiz} width="283" height="auto" className="quiz-image" />
          <SlideInRightAnimate>
            <Message>
              <Typography variant="h3">Rules for the game</Typography>

              <div style={{ paddingTop: '5px' }}>
                <Typography variant="h6">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Typography>
                <Typography variant="h6">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry..
                </Typography>
              </div>
            </Message>
            <div className="start-game-container">
              <SetTimer setTime={setGameTime} />
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
                  {numberOne}
                </Typography>
                <Typography variant="h3" display="inline" style={{ padding: 5 }}>
                  +
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
                      maxLength: (numberThree - numberOne).toString().length,
                      inputMode: 'numeric',
                    }}
                    error={error}
                    value={response}
                    onChange={(event) => isValidMove(event)}
                  />
                </Typography>
                <Typography variant="h3" display="inline" style={{ padding: 5 }}>
                  =
                </Typography>
                <Typography variant="h3" display="inline" style={{ padding: 5 }}>
                  {numberThree}
                </Typography>
              </Grid>
            </Message>
          </FadeInUpAnimate>
          <img src={question} width="250" height="auto" className="question-image" />
        </>
      ) : (
        <SlideInRightAnimate>
          <Message>
            {/* <Spinner percentile={percentile} /> */}
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
            <Typography variant="h4">
              Your percentile: {percentile}
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
                          Duration: {Number(game.duration) / 60}, Score: {game.score}
                        </li>
                      );
                    })}
                  </div>
                </Typography>
              </ScoreContainer>
            )}
          </Message>
          <div className="start-game-container">
            <SetTimer setTime={setGameTime} />
            <Button color="primary" variant="contained" style={{ marginTop: 10 }} onClick={replay}>
              <Typography variant="h6">REPLAY</Typography>
            </Button>
          </div>
        </SlideInRightAnimate>
      )}
    </>
  );
};

export default QuestionSection;
