import React, { useEffect, useState } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, Grid } from '@material-ui/core';
import Timer from '../../Quiz/Timer';
import QuestionSection from '../../Quiz/QuestionSection';
import './style.css';
import { UserContext, userData } from './UserContext';
import quiz from '../../../images/quiz_board.svg';
import axios from 'axios';

export const Dashboard = ({ g_id, u_id }) => {
  const [user, setUser] = useState(userData);
  return (
    <Paper
      variant="outlined"
      style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#F5F7FA' }}
    >
      <UserContext.Provider value={{ user, setUser }}>
        <SimpleCard g_id={g_id} u_id={u_id} />
      </UserContext.Provider>
      {/* <Skeleton variant="rect" width={210} height={118} /> */}
    </Paper>
  );
};

const useStyles = makeStyles({
  root: {
    width: 900,
    backgroundColor: '#F5F7FA',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  inside: {
    flexDirection: 'row',
    display: 'flex',
    height: '60%',
    alignContent: 'center',
    justifyContent: 'center',
    marign: '0px 20px',
  },
  button: {
    width: '100%',
    height: '100%',
  },
});

function SimpleCard({ g_id, u_id }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    if (loading) {
      const payload = {
        game_id: g_id,
        user_id: u_id,
      };

      axios
        .post('https://profved.com/wp-json/wp/v1/game_meta_data', { payload })
        .then((response) => {
          setData(response.data.msg[0]);
          setLoading(false);
        })
        .catch((exception) => {
          console.log(exception);
          setLoading(false);
        });
    }
  });

  return (
    <Grid>
      <Grid item md={12} className="widget-container">
        <Card>
          <CardContent style={{ padding: '0 0 24px 0' }} className="dashboard-background">
            {loading ? (
              <Skeleton variant="rect" width="100%" height="20%">
                {/* <div style={{ paddingTop: '10%' }} /> */}
              </Skeleton>
            ) : (
              <>
                <QuestionSection game_details={data} g_id={g_id} u_id={u_id} />
              </>
            )}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
