import React, { useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Slider from '@material-ui/core/Slider';
import { Card, Grid } from '@material-ui/core';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const useStyles = makeStyles({
  track: {
    color: '#3F51B5',
    background: '#3F51B5',
    height: '4px',
  },

  markLabel: {
    fontSize: '16px',
    fontWeight: 500,
  },

  thumb: {
    width: '8px',
    height: '24px',
    borderRadius: '20px',
    background: '#3F51B5',
    top: 8,
    marginLeft: -4,
  },

  rail: {
    height: '4px',
    background: '#3F51B5',
    opacity: '0.2',
  },

  mark: {
    width: '4px',
    height: '4px',
  },
});

export default function DurationMenu({ setTime }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [duration, setDuration] = React.useState('1');
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const classes = useStyles();
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (event) => {
    setAnchorEl(null);
    const { duration } = event.currentTarget.dataset;
    setDuration(duration);
    setTime(Number(duration));
  };

  const durations = [
    {
      value: 0,
      label: '1',
    },
    {
      value: 50,
      label: '3',
    },
    {
      value: 100,
      label: '5',
    },
  ];

  function valuetext(value) {
    return `${value / 10} mins`;
  }

  function valueLabelFormat(value) {
    let displayText = '';
    durations.forEach((current) => {
      if (current.value === value) {
        displayText = current.label;
      }
    });

    return displayText;
  }

  return (
    <Card
      style={{
        padding: '15px',
        boxShadow: '#E8E8F3 0px 10px 36px 0px, #E8E8F3 0px 0px 0px 1px',
        borderRadius: '14px',
      }}
    >
      <Grid container>
        <Grid item md={6} sm={6} xs={6}>
          <Typography style={{ fontSize: '20px', fontWeight: '500' }}>Choose timing</Typography>
        </Grid>
        <Grid item md={6} sm={6} xs={6}>
          <div style={{ fontSize: '20px', float: 'right', color: '#3F51B5', marginTop: '-5px' }}>
            <Typography style={{ fontSize: '28px', fontWeight: '500', display: 'inline' }}>
              {duration}
            </Typography>
            <Typography style={{ fontSize: '16px', fontWeight: '500', display: 'inline' }}>
              {' '}
              mins
            </Typography>
          </div>
        </Grid>
      </Grid>
      <div style={{ paddingTop: '5px' }}>
        <Slider
          defaultValue={0}
          valueLabelFormat={valueLabelFormat}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider-restrict"
          step={null}
          valueLabelDisplay="auto"
          marks={durations}
          classes={{
            ...classes,
          }}
          onChange={(event, value) => setDuration(valueLabelFormat(value))}
        />
      </div>
    </Card>
  );
}
