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
    position: 'relative',
    top: '30px',
  },
});

const Timer = ({ duration }) => {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(100);
  const [time, setTime] = useState(duration);
  const [progressColor, setProgressColor] = useState('green');
  const factor = Math.floor(duration / 100);
  useEffect(() => {
    const id = setInterval(() => {
      if (time !== 0) {
        setTime(time - 1);
        if (time % factor === 0) setProgress(progress - 1);
        changeColor();
      }
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [time]);

  const changeColor = () => {
    if (time === Math.round(duration / 2)) setProgressColor('yellow');
    else if (time === 60) setProgressColor('red');
    else setProgressColor('green');
  };

  const displayTime = () => moment.duration(time, 'seconds').format('hh:mm:ss');

  return (
    <>
      <div className={classes.root}>
        <LinearProgress
          variant="determinate"
          value={progress}
          classes={{ colorPrimary: progressColor }}
          style={{ height: '5px' }}
        />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'flex-end', position: 'relative', zIndex: '10' }}
      >
        <TimeContainer>{displayTime()}</TimeContainer>
      </div>
    </>
  );
};

export default Timer;

Timer.propTypes = {
  duration: PropTypes.number.isRequired,
};
