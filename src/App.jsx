import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { Dashboard } from './Components/Layout/Dashboard';
import Quiz from './Components/Quiz/Quiz';
import './style.css';
import 'animate.css';

export default function App({ domElement }) {
  const g_id = domElement.getAttribute('data-game-id');
  let u_id = domElement.getAttribute('data-user-id');
  if (u_id === '0') {
    u_id = '-1';
  }
  return (
    <Grid container>
      <Dashboard g_id={g_id} u_id={u_id} />
    </Grid>
  );
}
