import React, { useEffect, useRef, useState } from 'react';
import { Button, Card, Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Timer from '../Timer';
import CourseHeader from '../CourseHeader';
import Message from '../Message';
import { FadeInUpAnimate, SlideInRightAnimate } from './styled';
import "./style.css";
import Spinner from '../Spinner';
import SetTimer from '../Timer/Timer';

const useStyles = makeStyles({
  root: {
    width: 75,
    '& .MuiInputBase-root': {
      fontSize: '3rem',
    },
  },
  currentScore : {
    position: 'absolute',
    float: 'left',
    top: 0,
    left: 0,
    width: 50,
    height: 50,
    backgroundColor: 'red',
    borderBottomRightRadius: 50
  },
  currentScoreText : {
    textAlign: 'left',
    justifyContent: 'center',
    paddingTop: 10,
    paddingLeft: 10,
    color: 'white',
    fontWeight: 700
  }

});

const frequency = [{ score: "24", freq: "5" }, { score: "36", freq: "9" },
{ score: "41", freq: "12" }, { score: "57", freq: "6" }, { score: "62", freq: "8" },
{ score: "68", freq: "5" }, { score: "72", freq: "14" }, { score: "81", freq: "5" },
{ score: "93", freq: "3" }]

let countValue = frequency.reduce((countValues, obj) => countValues += Number(obj.freq), 0);


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
}

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

  const myPercentileValue = ((myPercentileStartRange * 10) +
    ((score - percentileTenth[myPercentileStartRange] + 1)
      / (percentileTenth[myPercentileEndRange] - percentileTenth[myPercentileStartRange] + 1)) * 10).toFixed(2);
  return myPercentileValue < 0 ? 0 : myPercentileValue > 100 ? 100 : myPercentileValue;
}


const QuestionSection = ({ duration }) => {
  const classes = useStyles();
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const [numberThree, setNumberThree] = useState(0);
  const [response, setResponse] = useState('');
  const [error, setError] = useState(false);
  const [time, setTime] = useState(duration);
  const [count, setCount] = useState(0);
  const [percentile, setPercentile] = useState(0);
  const [isIntroduction, setIsIntroduction] = useState(true);

  const genrateValues = () => {
    const answers = [10, 100, 1000];
    const answer = answers[Math.floor(Math.random() * answers.length)];

    let number1 = 0;
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
      default:
        number1 = Math.round(Math.random() * 10);
    }

    const number2 = answer - number1;

    setNumberThree(answer);
    setNumberTwo(number2);
    setNumberOne(number1);
  };

  useEffect(() => {
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
      }, 500);
      setError(false);
      setCount(count + 1);
      setPercentile(myPercentile(count));
    }
  };

  const replay = () => {
    setTime(duration);
    setResponse('');
    setCount(0);
  };

  const moveToGame = () => {
    setIsIntroduction(false);
  };

  const setGameTime = (time) => {
    setTime(time)
  }

  return (
    <>
      <CourseHeader heading="Course Introduction" />
      
      { isIntroduction ? (<> 
        
        <SlideInRightAnimate>
          <Message>
            <Typography variant="h3" display="inline">
              Rules for the game
            </Typography>
            <Typography variant="h4">Point 1</Typography>
            <Typography variant="h4">Point 2.</Typography>
          </Message>
          <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
            <SetTimer setTime={setGameTime} />
            <Button color="primary" variant="contained" style={{ marginTop: 10 }} onClick={moveToGame}>
              <Typography variant="h6">Let's Go</Typography>
            </Button>
          </div>
        </SlideInRightAnimate>
      
      </>) : time > 0 ? (
        <FadeInUpAnimate>
          <Timer duration={time} updateDuration={(remainingTime) => setTime(remainingTime)} />
          <Message className="question-section">
          <div className={classes.currentScore}>
                <div className={classes.currentScoreText}> {count}  </div> 
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
      ) : (
        <SlideInRightAnimate>
          <Spinner percentile={percentile}/>
          <Message>
            <Typography variant="h3" display="inline">
              Game Over
            </Typography>
            <Typography variant="h4">Your score: {count}</Typography>
            <Typography variant="h4">Your percentile score is : {percentile}. You were compared against score of {countValue} peers.</Typography>
          </Message>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
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
