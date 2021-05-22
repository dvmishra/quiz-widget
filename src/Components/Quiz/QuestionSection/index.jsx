import React, { useEffect, useRef, useState } from 'react';
import { Button, Card, Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Timer from '../Timer';
import CourseHeader from '../CourseHeader';
import Message from '../Message';
import { FadeInUpAnimate, SlideInRightAnimate } from './styled';
import "./style.css";

const useStyles = makeStyles({
  root: {
    width: 75,
    '& .MuiInputBase-root': {
      fontSize: '3rem',
    },
  },
});

const QuestionSection = ({ duration }) => {
  const classes = useStyles();
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const [numberThree, setNumberThree] = useState(0);
  const [response, setResponse] = useState('');
  const [error, setError] = useState(false);
  const [time, setTime] = useState(duration);
  const [count, setCount] = useState(0);

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
    }
  };

  const replay = () => {
    setTime(duration);
    setResponse('');
  };

  return (
    <>
      <CourseHeader heading="Course Introduction" />
      {time > 0 ? (
        <FadeInUpAnimate>
          <Timer duration={10} updateDuration={(remainingTime) => setTime(remainingTime)} />
          <Message className="question-section">
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
          <Message>
            <Typography variant="h3" display="inline">
              Game Over
            </Typography>
            <Typography variant="h4">Your score: {count}</Typography>
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
