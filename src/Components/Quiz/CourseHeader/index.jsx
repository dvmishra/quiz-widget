import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';

const CourseHeader = ({ heading }) => {
  return (
    <>
      <Card style={{ background: '#fff', borderBottom: '3px solid #7482E8', marginBottom: '10px'}}>
        <CardContent>
          <Typography style={{fontWeight: 600, color : '#5564CC'}} variant="h3">{heading}</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default CourseHeader;
