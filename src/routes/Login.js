import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Login() {
  return (
    <div className="App">
      <br />
      <Box display="flex" alignItems="center" justifyContent="center">
        <img src="./images/pill-logo.png" alt="pill-logo" width="4%" />
        &nbsp;
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
    </Box>
    </div>
  );
}

export default Login;

