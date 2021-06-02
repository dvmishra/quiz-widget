import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

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

export default function DurationMenu({ setTime }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [duration, setDuration] = React.useState('300');
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (event) => {
    setAnchorEl(null);
    const { duration } = event.currentTarget.dataset;
    setDuration(duration);
    setTime(Number(duration));
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
        style={{ marginTop: 10, width: '100%' }}
      >
        <Typography variant="h6">
          Choose Timing : {Number(duration) / 60} {duration === '60' ? 'min' : 'mins'}
        </Typography>
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem data-duration="60" onClick={handleItemClick} selected={duration === '60'}>
          <ListItemIcon>
            <AccessTimeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="1 min" />
        </StyledMenuItem>
        <StyledMenuItem data-duration="180" onClick={handleItemClick} selected={duration === '180'}>
          <ListItemIcon>
            <AccessTimeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="3 mins" />
        </StyledMenuItem>
        <StyledMenuItem data-duration="300" onClick={handleItemClick} selected={duration === '300'}>
          <ListItemIcon>
            <AccessTimeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="5 mins" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
