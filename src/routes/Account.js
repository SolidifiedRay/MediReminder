import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import Badge from '@mui/material/Badge';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 16,
    width: '500px',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

function Account() {
  const [openName, setOpenName] = React.useState(false);
  const handleClickOpenName = () => {
    setOpenName(true);
  };
  const handleCloseName = () => {
    setOpenName(false);
  };

  const [openEmail, setOpenEmail] = React.useState(false);
  const handleClickOpenEmail = () => {
    setOpenEmail(true);
  };
  const handleCloseEmail = () => {
    setOpenEmail(false);
  };

  const [openPassword, setOpenPassword] = React.useState(false);
  const handleClickOpenPassword = () => {
    setOpenPassword(true);
  };
  const handleClosePassword = () => {
    setOpenPassword(false);
  };

  const [openMedicationList, setOpenMedicationList] = React.useState(false);
  const handleClickOpenMedicationList = () => {
    setOpenMedicationList(true);
  };
  const handleCloseMedicationList = () => {
    setOpenMedicationList(false);
  };

  const [openConnectionsCode, setOpenConnectionsCode] = React.useState(false);
  const handleClickOpenConnectionsCode = () => {
    setOpenConnectionsCode(true);
  };
  const handleCloseConnectionsCode = () => {
    setOpenConnectionsCode(false);
  };

  return (
    <div>
      <br />
      <Box display="flex" alignItems="center" justifyContent="center">
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={
            <SmallAvatar style={{ backgroundColor: 'white' }}>
              <PhotoCameraOutlinedIcon style={{ color: 'black' }} />
            </SmallAvatar>
          }
        >
          <Avatar style={{ width: '150px', height: '150px' }}>
            <PersonIcon
              style={{ width: '130px', height: '130px', color: 'black' }}
            />
          </Avatar>
        </Badge>
      </Box>
      <br />
      <Box display="flex" alignItems="center" justifyContent="center">
        <Typography
          display="inline"
          variant="h4"
          style={{ color: '#000000' }}
          align="center"
        >
          Hello,&nbsp;
        </Typography>
        <Typography display="inline" variant="h4" style={{ color: '#549CDF' }}>
          Username.
        </Typography>
      </Box>
      <br />
      <br />
      <br />
      <Box display="flex" alignItems="center" justifyContent="center">
        <Grid container spacing={8} style={{ width: '90%' }}>
          <Grid item xs={12} sm={4} md={4}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Button
                variant="outlined"
                style={{
                  height: '100px',
                  width: '400px',
                  textTransform: 'none',
                }}
                onClick={handleClickOpenName}
                disableElevation
              >
                <Stack
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography
                    display="inline"
                    variant="h4"
                    style={{ color: '#000000' }}
                  >
                    Name
                  </Typography>
                  <Typography
                    display="inline"
                    variant="h6"
                    style={{ color: '#549CDF' }}
                  >
                    Username
                  </Typography>
                </Stack>
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Button
                variant="outlined"
                style={{
                  height: '100px',
                  width: '400px',
                  textTransform: 'none',
                }}
                onClick={handleClickOpenEmail}
                disableElevation
              >
                <Stack
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography
                    display="inline"
                    variant="h4"
                    style={{ color: '#000000' }}
                  >
                    Email
                  </Typography>
                  <Typography
                    display="inline"
                    variant="h6"
                    style={{ color: '#549CDF' }}
                  >
                    Email@website.com
                  </Typography>
                </Stack>
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Button
                variant="outlined"
                style={{
                  height: '100px',
                  width: '400px',
                  textTransform: 'none',
                }}
                onClick={handleClickOpenPassword}
                disableElevation
              >
                <Stack
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography
                    display="inline"
                    variant="h4"
                    style={{ color: '#000000' }}
                  >
                    Password
                  </Typography>
                  <Typography
                    display="inline"
                    variant="h6"
                    style={{ color: '#549CDF' }}
                  >
                    Change Password
                  </Typography>
                </Stack>
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={6}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Button
                variant="outlined"
                style={{
                  height: '100px',
                  width: '400px',
                  textTransform: 'none',
                }}
                onClick={handleClickOpenMedicationList}
                disableElevation
              >
                <Stack
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography
                    display="inline"
                    variant="h4"
                    style={{ color: '#000000' }}
                  >
                    Medication List
                  </Typography>
                  <Typography
                    display="inline"
                    variant="h6"
                    style={{ color: '#549CDF' }}
                  >
                    View Full List
                  </Typography>
                </Stack>
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={6}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Button
                variant="outlined"
                style={{
                  height: '100px',
                  width: '400px',
                  textTransform: 'none',
                }}
                onClick={handleClickOpenConnectionsCode}
                disableElevation
              >
                <Stack
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography
                    display="inline"
                    variant="h4"
                    style={{ color: '#000000' }}
                  >
                    Connections Code
                  </Typography>
                  <Typography
                    display="inline"
                    variant="h6"
                    style={{ color: '#549CDF' }}
                  >
                    View Code
                  </Typography>
                </Stack>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Dialog open={openName} onClose={handleCloseName}>
        <DialogTitle>Name</DialogTitle>
        <DialogContent>123</DialogContent>
      </Dialog>
      <Dialog open={openEmail} onClose={handleCloseEmail}>
        <DialogTitle>Email</DialogTitle>
        <DialogContent>123</DialogContent>
      </Dialog>
      <Dialog open={openPassword} onClose={handleClosePassword}>
        <DialogTitle>Password</DialogTitle>
        <DialogContent>123</DialogContent>
      </Dialog>
      <Dialog open={openMedicationList} onClose={handleCloseMedicationList}>
        <DialogTitle>Medication List</DialogTitle>
        <DialogContent>123</DialogContent>
      </Dialog>
      <Dialog open={openConnectionsCode} onClose={handleCloseConnectionsCode}>
        <DialogTitle>ConnectionsCode</DialogTitle>
        <DialogContent>123</DialogContent>
      </Dialog>
    </div>
  );
}

export default Account;
