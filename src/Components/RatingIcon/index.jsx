import Star from '@material-ui/icons/Star';
import React from 'react';

export const RatingIcon = ({ count }) => {
  return <div>{new Array(count).fill(<Star style={{ color: '#FFFF00' }} />)}</div>;
};
