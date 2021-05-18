import React, { useEffect, useState } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

export const Dashboard = (props) => {
  return (
    <Paper variant="outlined" style={{ display: 'flex', flexDirection: 'row' }}>
      <SimpleCard />
      {/* <Skeleton variant="rect" width={210} height={118} /> */}
    </Paper>
  );
};

const useStyles = makeStyles({
  root: {
    width: 900,
    height: 600,
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
    }, 200000000);
  });

  return (
    <Card className={classes.root}>
      <CardContent>
        {loading ? (
          <Skeleton variant="rect" width="100%" height="20%">
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
      </CardContent>

      <CardContent style={{ height: '75%' }}>
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
      </CardContent>
    </Card>
  );
}
