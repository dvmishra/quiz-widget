import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import Card from '@material-ui/core/Card';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import { TimeContainer, ShakeAnimate } from './styled';
import ProgressBar from '@ramonak/react-progress-bar';
momentDurationFormatSetup(moment);
const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'relative',
    top: '35px',
  },
});

const Timer = ({ duration, updateDuration }) => {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(100);
  const [time, setTime] = useState(Number(duration));
  const [timerColor, setTimerColor] = useState('#2962ff');
  const factor = Math.floor(duration / 100);
  useEffect(() => {
    const id = setInterval(() => {
      if (time !== 0) {
        setTime(time - 1);
        if (time % factor === 0) setProgress(progress - 1);
        changeColor();
      }
      updateDuration(time);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [time]);

  const changeColor = () => {
    if (Number(duration) === 60) {
      if (time === 15) setTimerColor('#dd2c00');
      if (time === Math.round(Number(duration) / 2)) setTimerColor('darkorange');
    } else {
      if (time === Math.round(Number(duration) / 2)) setTimerColor('darkorange');
      if (time === 60) setTimerColor('#dd2c00');
    }
  };

  const displayTime = () => moment.duration(time, 'seconds').format('hh:mm:ss');

  return <>{displayTime()}</>;
};

export default Timer;

Timer.propTypes = {
  duration: PropTypes.number.isRequired,
  updateDuration: PropTypes.func.isRequired,
};
