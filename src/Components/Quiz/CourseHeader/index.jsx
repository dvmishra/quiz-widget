import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';

const CourseHeader = ({ heading }) => {
  return (
    <>
      <Card style={{ background: 'transparent', backdropFilter: 'blur(4px)' }}>
        <CardContent>
          <Typography variant="h3">{heading}</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default CourseHeader;
