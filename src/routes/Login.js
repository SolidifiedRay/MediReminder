import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

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

function Login() {
  return (
    <div>
      <br />
      <Box display="flex" alignItems="center" justifyContent="center">
        <img src="./images/pill-white.png" alt="pill-logo" />
        &nbsp;
        <Typography display="inline" variant="h2" style={{ color: '#549CDF' }}>
          Medi
        </Typography>
        <Typography display="inline" variant="h2" style={{ color: '#000000' }}>
          Reminder
        </Typography>
      </Box>
      <br />
      <Box display="flex" alignItems="center" justifyContent="center">
        <Card variant="outlined" style={{ height: '450px', width: '600px' }}>
          <br />
          <Box display="flex" alignItems="center" justifyContent="center">
            <Typography variant="h4" style={{ color: '#000000' }}>
              Sign in
            </Typography>
          </Box>
          <br />
          <Box display="flex" alignItems="center" justifyContent="center">
            <FormControl variant="standard">
              <InputLabel shrink>
                <Typography variant="h6" style={{ color: '#000000' }}>
                  Email or username
                </Typography>
              </InputLabel>
              <BootstrapInput id="email" />
            </FormControl>
          </Box>
          <Box
            display="flex"
            alignItems="right"
            justifyContent="right"
            style={{ width: '95%' }}
          >
            <Typography variant="h8" style={{ color: '#549CDF' }}>
              Forgot email or username?
            </Typography>
          </Box>
          <br />
          <Box display="flex" alignItems="center" justifyContent="center">
            <FormControl variant="standard">
              <InputLabel shrink>
                <Typography variant="h6" style={{ color: '#000000' }}>
                  Password
                </Typography>
              </InputLabel>
              <BootstrapInput id="password" />
            </FormControl>
          </Box>
          <Box
            display="flex"
            alignItems="right"
            justifyContent="right"
            style={{ width: '95%' }}
          >
            <Typography variant="h8" style={{ color: '#549CDF' }}>
              Forgot password
            </Typography>
          </Box>
          <br />
          <Box display="flex" alignItems="center" justifyContent="center">
            <Button
              variant="contained"
              style={{
                backgroundColor: '#549CDF',
                textTransform: 'none',
                width: '100px',
                height: '30px',
                borderRadius: '25px',
              }}
              disableElevation
            >
              <Typography variant="h7">Sign in</Typography>
            </Button>
          </Box>
          <br />
          <Divider variant="middle">
            <Typography variant="h8" style={{ color: '#8C8B8B' }}>
              New to MediReminder?
            </Typography>
          </Divider>
          <br />
          <Box display="flex" alignItems="center" justifyContent="center">
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
              component={Link}
              to={'/Signup'}
            >
              <Typography variant="h8" style={{ color: '#549CDF' }}>
                Create account
              </Typography>
            </Button>
          </Box>
        </Card>
      </Box>
    </div>
  );
}

export default Login;
