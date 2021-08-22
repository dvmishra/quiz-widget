import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import { Header, Title } from './styled';

const CourseHeader = ({ heading }) => {
  return (
    <>
      {/* <Card
        style={{
          background: 'transparent',
          borderBottom: '3px solid #7482E8',
          marginBottom: '10px',
          backdropFilter: 'blur(4px)',
        }}
      >
        <CardContent>
          <Typography style={{ fontWeight: 600, color: '#5564CC' }} variant="h3">
            {heading}
          </Typography>
        </CardContent>
      </Card> */}
      <Header>
        <Title>{heading}</Title>
      </Header>
    </>
  );
};

export default CourseHeader;
