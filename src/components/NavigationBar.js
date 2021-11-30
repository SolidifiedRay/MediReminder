import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import Group from '@mui/icons-material/Group';
import DateRange from '@mui/icons-material/DateRange';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

export default function NavigationBar({ username }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#DEDEDE' }} elevation={0}>
        <Toolbar>
          <img src="./images/pill-logo.png" alt="pill-logo" />
          &nbsp;
          <Typography component="div" sx={{ flexGrow: 1 }}>
            <Link to='/' style={{textDecoration:"none"}}>
            <Typography
              display="inline"
              variant="h4"
              style={{ color: '#549CDF' }}
            >
              Medi
            </Typography>
            <Typography
              display="inline"
              variant="h4"
              style={{ color: '#000000' }}
            >
              Reminder
            </Typography>
            </Link>
          </Typography>
          {username === '' ? (
            <Button
              color="inherit"
              style={{ color: '#000000', textTransform: 'none' }}
              component={Link}
              to={'/Login'}
            >
              <Typography variant="h6">
                Sign In or Create account &nbsp;
              </Typography>
              <PersonIcon style={{ width: 50, height: 50 }} />
            </Button>
          ) : (
            <Stack direction="row" spacing={2}>
              <Button
                color="inherit"
                style={{ color: '#000000', textTransform: 'none' }}
              >
                <Typography variant="h6">Reminders&nbsp;</Typography>
                <DateRange style={{ width: 50, height: 50 }} />
              </Button>
              <Button
                color="inherit"
                style={{ color: '#000000', textTransform: 'none' }}
                component={Link}
                to={'/Connections'}
              >
                <Typography variant="h6">Connections&nbsp;</Typography>
                <Group style={{ width: 50, height: 50 }} />
              </Button>
              <Button
                color="inherit"
                style={{ color: '#000000', textTransform: 'none' }}
                component={Link}
                to={'/Account'}
              >
                <Typography variant="h6">{username}</Typography>
                <PersonIcon style={{ width: 50, height: 50 }} />
              </Button>
            </Stack>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
