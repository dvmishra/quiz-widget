import { Card } from '@material-ui/core';
import React from 'react';

const Message = ({ children }) => (
  <Card
    style={{
      padding: '50px',
      textAlign: 'center',
      marginTop: '3%',
      height: '100%',
      background: 'transparent',
      backdropFilter: 'blur(4px)',
    }}
  >
    {children}
  </Card>
);

export default Message;
