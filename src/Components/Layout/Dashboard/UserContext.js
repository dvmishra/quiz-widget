import React from 'react';

export const userData = {
  id: 'sdkdf-34083xf-23nkf34',
  games: [
    { duration: 300, startTime: new Date('2021-05-12').toISOString(), score: 69 },
    { duration: 180, startTime: new Date('2021-05-12').toISOString(), score: 40 },
  ],
};

export const UserContext = React.createContext(null);
