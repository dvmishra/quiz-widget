import React, { useEffect, useState } from 'react';
import { Button, Card, Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Timer from '../Timer';
import Dashboard from '../../Introduction';
import CourseHeader from '../CourseHeader';

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

  const genrateValues = () => {

    const answers = [10, 100, 1000];
    const answer = answers[Math.floor(Math.random() * answers.length)];

    let number1 = 0;
    switch (answer) {
      case 10:
        number1 = Math.round(Math.random() * 9);
        break;
      case 100:
        number1 = Math.round(Math.random() * 99);
        break;
      case 1000:
        number1 = Math.round(Math.random() * 999);
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

    if (Number(event.target.value) === numberTwo) {
      event.target.value = "";
      genrateValues();
    }

  }



  return (
    <>
      <CourseHeader heading={'Course Introduction'} />
      <Timer duration={duration} />
      <Card style={{
        padding: '50px', textAlign: 'center', marginTop: '10%', height: '100%', background: 'transparent',
        backdropFilter: 'blur(4px)'
      }}>
        <Grid>
          <Typography variant="h3" display="inline">
            {numberOne}
          </Typography>
          <Typography variant="h3" display="inline">
            +
          </Typography>
          <Typography variant="h3" display="inline">
            <TextField
              multiline={false}
              rowsMax={1}
              className={classes.root}
              inputProps={{ style: { paddingLeft: 0 }, maxLength: (numberThree - numberOne).toString().length }}
              onChange={(event) => isValidMove(event)}
            />
          </Typography>
          <Typography variant="h3" display="inline">
            =
          </Typography>
          <Typography variant="h3" display="inline">
            {numberThree}
          </Typography>
        </Grid>
        {/* <Button 
        variant="contained" color="primary" style={{ marginTop: 10, width: '50%' }}>
          <Typography variant="h6" display="inline" style={{ color: 'white' }}>
            NEXT
          </Typography>
        </Button> */}
      </Card>
    </>
  );
};

export default QuestionSection;
