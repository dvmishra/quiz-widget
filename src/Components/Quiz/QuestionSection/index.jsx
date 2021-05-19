import { Card, Grid, Typography } from '@material-ui/core';
import React from 'react';
import Timer from '../Timer';

const QuestionSection = ({ duration }) => (
  <>
    <Timer duration={duration} />
    <Card style={{ padding: '50px', textAlign: 'center', marginTop: '10%', height: '100%' }}>
      <Grid>
        <Typography variant="h3" display="inline">
          5
        </Typography>
        <Typography variant="h3" display="inline">
          +
        </Typography>
        <Typography variant="h3" display="inline">
          _
        </Typography>
        <Typography variant="h3" display="inline">
          =
        </Typography>
        <Typography variant="h3" display="inline">
          10
        </Typography>
      </Grid>
    </Card>
  </>
);

export default QuestionSection;
