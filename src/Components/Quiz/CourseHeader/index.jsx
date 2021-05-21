import { Card, CardContent, Typography } from '@material-ui/core';
import React from "react";

const CourseHeader = ({ heading }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h3">{heading}</Typography>
      </CardContent>
    </Card>
  );
};

export default CourseHeader;
