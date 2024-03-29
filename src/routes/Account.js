import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import Badge from '@mui/material/Badge';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

const BootstrapInputSmall = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 16,
    width: '200px',
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

function Account({ LogoutFunc, user }) {
  const [editUsername, setEditUsername] = React.useState(false);
  const [editEmail, setEditEmail] = React.useState(false);
  const [editPassword, setEditPassword] = React.useState(false);
  const [openName, setOpenName] = React.useState(false);

  const handleClickOpenName = () => {
    setOpenName(true);
  };
  const handleCloseName = () => {
    setOpenName(false);
    setEditUsername(false);
  };

  const [openEmail, setOpenEmail] = React.useState(false);
  const handleClickOpenEmail = () => {
    setOpenEmail(true);
  };
  const handleCloseEmail = () => {
    setOpenEmail(false);
    setEditEmail(false);
  };

  const [openPassword, setOpenPassword] = React.useState(false);
  const handleClickOpenPassword = () => {
    setOpenPassword(true);
  };
  const handleClosePassword = () => {
    setOpenPassword(false);
    setEditPassword(false);
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

  function createData(name, dosage) {
    return { name, dosage };
  }

  const rows = [
    createData('aspirin', '1 daily'),
    createData('carvedilol', '1 twice daily'),
    createData('citalopram', '1 daily'),
    createData('metformin', '1 twice daily'),
    createData('zolpidem', '1 at bedtime'),
  ];

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
          {user.username}.
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
                    {user.username}
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
                    {user.email}
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
          <Grid item xs={12} sm={4} md={4}>
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
          <Grid item xs={12} sm={4} md={4}>
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
          <Grid item xs={12} sm={4} md={4}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Button
                variant="outlined"
                style={{
                  height: '100px',
                  width: '400px',
                  textTransform: 'none',
                }}
                onClick={LogoutFunc}
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
                    Logout
                  </Typography>
                </Stack>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Dialog open={openName} onClose={handleCloseName}>
        <DialogTitle style={{ width: '500px' }}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Typography
              display="inline"
              variant="h3"
              style={{ color: '#549CDF' }}
            >
              Username
            </Typography>
          </Box>
        </DialogTitle>
        <DialogContent style={{ width: '500px' }}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Grid container spacing={8}>
              <Grid item xs={12} sm={6} md={6}>
                <Stack>
                  <Typography
                    display="inline"
                    variant="h6"
                    style={{ color: '#000000' }}
                  >
                    Current Username
                  </Typography>
                  <Typography
                    display="inline"
                    variant="h6"
                    style={{ color: '#549CDF' }}
                  >
                    {editUsername ? (
                      <BootstrapInputSmall
                        id="username"
                        value={user.username}
                        width="200px"
                      />
                    ) : (
                      user.username
                    )}
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <br />
                <Box display="flex" alignItems="center" justifyContent="end">
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: '#549CDF',
                      textTransform: 'none',
                      width: '200px',
                      height: '40px',
                      borderRadius: '25px',
                    }}
                    onClick={() => setEditUsername(true)}
                    disableElevation
                  >
                    <Typography variant="h6">Change username</Typography>
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <br />
          <Box display="flex" alignItems="center" justifyContent="center">
            <FormControl variant="standard">
              <InputLabel shrink>
                <Typography variant="h5" style={{ color: '#000000' }}>
                  Add Full Name
                </Typography>
              </InputLabel>
              <BootstrapInput id="email" />
            </FormControl>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Typography
              variant="h7"
              style={{ color: '#8C8B8B' }}
              align="center"
            >
              When you add your full name is will be used as your Display Name
              with all your connections.
            </Typography>
          </Box>
          <br />
          <Box display="flex" alignItems="center" justifyContent="center">
            <Button
              variant="contained"
              style={{
                backgroundColor: '#549CDF',
                textTransform: 'none',
                width: '200px',
                height: '40px',
                borderRadius: '25px',
              }}
              disableElevation
            >
              <Typography variant="h6">Add</Typography>
            </Button>
          </Box>
        </DialogContent>
      </Dialog>

      <Dialog open={openEmail} onClose={handleCloseEmail}>
        <DialogTitle style={{ width: '500px' }}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Typography
              display="inline"
              variant="h3"
              style={{ color: '#549CDF' }}
            >
              Email
            </Typography>
          </Box>
        </DialogTitle>
        <DialogContent style={{ width: '500px' }}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Grid container spacing={8}>
              <Grid item xs={12} sm={6} md={6}>
                <Stack>
                  <Typography
                    display="inline"
                    variant="h6"
                    style={{ color: '#000000' }}
                  >
                    Current Email
                  </Typography>
                  <Typography
                    display="inline"
                    variant="h6"
                    style={{ color: '#549CDF' }}
                  >
                    {editEmail ? (
                      <BootstrapInputSmall
                        id="email"
                        value={user.email}
                        width="200px"
                      />
                    ) : (
                      user.email
                    )}
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <br />
                <Box display="flex" alignItems="center" justifyContent="end">
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: '#549CDF',
                      textTransform: 'none',
                      width: '200px',
                      height: '40px',
                      borderRadius: '25px',
                    }}
                    onClick={() => setEditEmail(true)}
                    disableElevation
                  >
                    <Typography variant="h6">Change Email</Typography>
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
      </Dialog>

      <Dialog open={openPassword} onClose={handleClosePassword}>
        <DialogTitle style={{ width: '500px' }}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Typography
              display="inline"
              variant="h3"
              style={{ color: '#549CDF' }}
            >
              Password
            </Typography>
          </Box>
        </DialogTitle>
        <DialogContent style={{ width: '500px' }}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Grid container spacing={8}>
              <Grid item xs={12} sm={6} md={6}>
                <Stack>
                  <Typography
                    display="inline"
                    variant="h6"
                    style={{ color: '#000000' }}
                  >
                    Current Password
                  </Typography>
                  <Typography
                    display="inline"
                    variant="h6"
                    style={{ color: '#549CDF' }}
                  >
                    {editPassword ? (
                      <div>
                        <BootstrapInputSmall id="password" width="200px" />
                        <Typography
                          display="inline"
                          variant="h6"
                          style={{ color: '#000000' }}
                        >
                          Re-enter Password
                        </Typography>
                        <BootstrapInputSmall id="password" width="200px" />
                      </div>
                    ) : (
                      '*******'
                    )}
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <br />
                <Box display="flex" alignItems="center" justifyContent="end">
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: '#549CDF',
                      textTransform: 'none',
                      width: '200px',
                      height: '40px',
                      borderRadius: '25px',
                    }}
                    onClick={() => setEditPassword(true)}
                    disableElevation
                  >
                    <Typography variant="h6">Change Password</Typography>
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
      </Dialog>

      <Dialog open={openMedicationList} onClose={handleCloseMedicationList}>
        <DialogTitle style={{ width: '550px' }}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Typography
              display="inline"
              variant="h3"
              style={{ color: '#549CDF' }}
            >
              Medications
            </Typography>
          </Box>
        </DialogTitle>
        <DialogContent style={{ width: '550px' }}>
          <TableContainer component={Paper} style={{ width: '550px' }}>
            <Table aria-label="medications list">
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell align="left">
                      <Typography variant="h8" style={{ color: '#549CDF' }}>
                        {row.name}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="h8" style={{ color: '#C4C4C4' }}>
                        {row.dosage}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: '#DEDEDE',
                          textTransform: 'none',
                          width: '150px',
                          height: '30px',
                          borderRadius: '25px',
                        }}
                        disableElevation
                      >
                        <Typography variant="h8" style={{ color: '#549CDF' }}>
                          Medication Info
                        </Typography>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
      </Dialog>

      <Dialog open={openConnectionsCode} onClose={handleCloseConnectionsCode}>
        <DialogTitle style={{ width: '500px' }}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Typography
              display="inline"
              variant="h3"
              style={{ color: '#549CDF' }}
            >
              Your Code
            </Typography>
          </Box>
        </DialogTitle>
        <DialogContent style={{ width: '500px' }}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Grid container spacing={8}>
              <Grid item xs={12} sm={12} md={12}>
                <Stack>
                  <br />
                  <Typography
                    display="inline"
                    variant="h5"
                    style={{ color: '#000000' }}
                    align="center"
                  >
                    XGJTYEH
                  </Typography>
                  <br />
                  <Typography
                    display="inline"
                    variant="h6"
                    style={{ color: '#000000' }}
                  >
                    Share this code to allow others to connect to your account!
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Account;
