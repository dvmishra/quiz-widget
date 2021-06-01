import React, { useEffect, useState } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, Grid } from '@material-ui/core';
import Timer from '../../Quiz/Timer';
import QuestionSection from '../../Quiz/QuestionSection';
import './style.css';
import { UserContext, userData } from './UserContext';
import quiz from '../../../images/quiz_board.svg';

export const Dashboard = (props) => {
  const [user, setUser] = useState(userData);
  return (
    <Paper variant="outlined" style={{ display: 'flex', flexDirection: 'row' }}>
      <UserContext.Provider value={{ user, setUser }}>
        <SimpleCard />
      </UserContext.Provider>
      {/* <Skeleton variant="rect" width={210} height={118} /> */}
    </Paper>
  );
};

const useStyles = makeStyles({
  root: {
    width: 900,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  inside: {
    flexDirection: 'row',
    display: 'flex',
    height: '60%',
    alignContent: 'center',
    justifyContent: 'center',
    marign: '0px 20px',
  },
  button: {
    width: '100%',
    height: '100%',
  },
});

function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  return (
    <Grid container>
      <Grid item md={12}>
        <Card className="dashboard-background container">
          <CardContent>
            {loading ? (
              <Skeleton variant="rect" width="100%" height="20%">
                <div style={{ paddingTop: '10%' }} />
              </Skeleton>
            ) : (
              <>
                <QuestionSection duration={5} />
              </>
            )}
          </CardContent>

          {/* <CardContent style={{ height: '75%' }}>
        {loading ? (
          <Skeleton variant="rect" width="100%" height="100%">
            <div style={{ paddingTop: '10%' }} />
          </Skeleton>
        ) : (
          <img
            src="https://i.pinimg.com/originals/5a/bf/93/5abf939069cc0ae4633e9b1670f11ed5.jpg"
            width="300"
            height="400"
            alt=""
          />
        )}
      </CardContent> */}
        </Card>
      </Grid>
    </Grid>
  );
}
