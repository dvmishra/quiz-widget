import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import Card from '@material-ui/core/Card';
import { TimeContainer } from './styled';

momentDurationFormatSetup(moment);

const Timer = ({ duration }) => {
  const [time, setTime] = useState(duration);
  useEffect(() => {
    const id = setInterval(() => {
      clearInterval(id);
      setTime(time - 1);
    }, 1000);
  }, [time]);

  const displayTime = () => moment.duration(time, 'seconds').format('mm:ss');

  return (
    <Card>
      <TimeContainer>{displayTime()}</TimeContainer>
    </Card>
  );
};

export default Timer;

Timer.propTypes = {
  duration: PropTypes.number.isRequired,
};
