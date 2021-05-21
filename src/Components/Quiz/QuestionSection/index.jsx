import { Button, Card, CardContent, Grid, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timer from '../Timer';
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
  return (
    <>
      <CourseHeader heading={'Course Introduction'} />
      <Timer duration={duration} />
      <Card
        style={{
          padding: '50px',
          textAlign: 'center',
          marginTop: '1%',
          height: '100%',
          background: 'transparent',
          backdropFilter: 'blur(4px)'
        }}
      >
        <CardContent>
          <Grid>
            <Typography variant="h3" display="inline">
              5
            </Typography>
            <Typography variant="h3" display="inline">
              +
            </Typography>
            <Typography variant="h3" display="inline">
              <TextField
                multiline={false}
                rowsMax={1}
                className={classes.root}
                inputProps={{ style: { padding: 0 } }}
              />
            </Typography>
            <Typography variant="h3" display="inline">
              =
            </Typography>
            <Typography variant="h3" display="inline">
              10
            </Typography>
          </Grid>
          <Button variant="contained" color="primary" style={{ marginTop: 10, width: '50%' }}>
            <Typography variant="h6" display="inline" style={{ color: 'white' }}>
              NEXT
            </Typography>
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default QuestionSection;
