import { Card } from '@material-ui/core';
import React from 'react';

const Message = ({ children, className }) => (
  <Card
    style={{
      padding: '12px 14px',
      borderRadius: '14px',
      height: '100%',
      backdropFilter: 'blur(4px)',
      lineHeight: '2em',
      boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
    }}
    className={className}
  >
    {children}
  </Card>
);

export default Message;
