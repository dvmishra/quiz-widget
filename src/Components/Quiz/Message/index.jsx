import { Card } from '@material-ui/core';
import React from 'react';

const Message = ({ children, className }) => (
  <Card
    style={{
      padding: '50px',
      textAlign: 'center',
      marginTop: '3%',
      marginBottom: '5%',
      height: '100%',
      background: '#fff',
      backdropFilter: 'blur(4px)',
      lineHeight: "2em",
      borderBottom: '3px solid #7482E8'
    }}
    className={className}
  >
    {children}
  </Card>
);

export default Message;
