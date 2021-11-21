import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#DEDEDE' }} elevation={0}>
        <Toolbar>
          <img src="./images/pill-logo.png" alt="pill-logo" width="4%" />
          &nbsp;
          <Typography component="div" sx={{ flexGrow: 1 }}>
            <Typography
              display="inline"
              variant="h6"
              style={{ color: '#549CDF' }}
            >
              Medi
            </Typography>
            <Typography
              display="inline"
              variant="h6"
              style={{ color: '#000000' }}
            >
              Reminder
            </Typography>
          </Typography>
          <Button
            color="inherit"
            style={{ color: '#000000', textTransform: 'none' }}
            component={Link}
            to={"/Login"}
          >
            Sign In or Create account &nbsp;
            <PersonIcon style={{ width: 40, height: 40 }} />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
