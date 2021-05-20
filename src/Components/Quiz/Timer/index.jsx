import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import Card from '@material-ui/core/Card';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import { TimeContainer } from './styled';

momentDurationFormatSetup(moment);
const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

const Timer = ({ duration }) => {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(100);
  const [time, setTime] = useState(duration);
  const factor = Math.floor(duration / 100);
  useEffect(() => {
    const id = setInterval(() => {
      if (time !== 0) {
        setTime(time - 1);
        if (time % factor === 0) setProgress(progress - 1);
      }
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [time]);

  const displayTime = () => moment.duration(time, 'seconds').format('mm:ss');

  return (
    <Card>
      <TimeContainer>{displayTime()}</TimeContainer>
      <div className={classes.root}>
        <LinearProgress variant="determinate" value={progress} />
      </div>
    </Card>
  );
};

export default Timer;

Timer.propTypes = {
  duration: PropTypes.number.isRequired,
};
