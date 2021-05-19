import { Card, Grid, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timer from '../Timer';

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
      <Timer duration={duration} />
      <Card style={{ padding: '50px', textAlign: 'center', marginTop: '10%', height: '100%' }}>
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
      </Card>
    </>
  );
};

export default QuestionSection;
