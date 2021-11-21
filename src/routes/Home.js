import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function Home() {
  return (
    <div className="App">
      <br />
      <Box display="flex" alignItems="center" justifyContent="center">
        <Typography
          display="inline"
          variant="h2"
          style={{ color: '#000000' }}
          align="center"
        >
          Your
          <Typography
            display="inline"
            variant="h2"
            style={{ color: '#549CDF' }}
          >
            &nbsp;Health&nbsp;
          </Typography>
          is important,
        </Typography>
      </Box>
      <br />
      <Box display="flex" alignItems="center" justifyContent="center">
        <Typography
          display="inline"
          variant="h2"
          style={{ color: '#000000' }}
          align="center"
        >
          make sure you
          <Typography
            display="inline"
            variant="h2"
            style={{ color: '#549CDF' }}
          >
            &nbsp;protect&nbsp;
          </Typography>
          it.
        </Typography>
      </Box>
      <br />
      <Box display="flex" alignItems="center" justifyContent="center">
        <Typography
          display="inline"
          variant="h5"
          style={{ color: '#000000' }}
          align="center"
        >
          With MediReminder schedule reminders to make sure you and your loved
          ones are taking your medication on time.
        </Typography>
      </Box>
      <br />
      <br />
      <br />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={4} sm={4} md={6}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Typography
                variant="h5"
                style={{ color: '#549CDF' }}
                align="center"
              >
                Set Reminders for you Medication
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              margin={2}
            >
              <Typography
                variant="h6"
                style={{ color: '#8C8B8B' }}
                align="center"
              >
                Simply add when you need to take your medication, set it to
                repeat and how much you need to take.
              </Typography>
            </Box>
            <br />
            <Box display="flex" alignItems="center" justifyContent="center">
              <Button
                variant="contained"
                style={{
                  backgroundColor: '#549CDF',
                  textTransform: 'none',
                  width: '250px',
                  height: '50px',
                  borderRadius: '25px',
                }}
                disableElevation
              >
                <Typography variant="h6">Get Started</Typography>
              </Button>
            </Box>
            <Divider orientation="vertical" flexItem />
          </Grid>
          <Grid item xs={4} sm={4} md={6}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Typography
                display="inline"
                variant="h5"
                style={{ color: '#549CDF' }}
                align="center"
              >
                Connect with Friends and Family
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              margin={2}
            >
              <Typography
                variant="h6"
                style={{ color: '#8C8B8B' }}
                align="center"
              >
                Connect with others to set their medical reminders or to set
                reminders for them to keep you accountable
              </Typography>
            </Box>
            <br />
            <Box display="flex" alignItems="center" justifyContent="center">
              <Button
                variant="contained"
                style={{
                  backgroundColor: '#549CDF',
                  textTransform: 'none',
                  width: '250px',
                  height: '50px',
                  borderRadius: '25px',
                }}
                disableElevation
              >
                <Typography variant="h6">Get Started</Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
