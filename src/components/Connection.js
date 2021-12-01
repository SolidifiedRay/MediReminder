import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

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

function Connection({ name, email, relationship, id, deleteConnection }) {
  const [openDelete, setOpenDelete] = React.useState(false);
  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const [openSettings, setOpenSettings] = React.useState(false);
  const handleClickOpenSettings = () => {
    setOpenSettings(true);
  };
  const handleCloseSettings = () => {
    setOpenSettings(false);
  };

  const [details, setDetails] = React.useState({
    name: name,
    email: email,
    relationship: relationship,
  });

  const [editDetails, setEditDetails] = React.useState(details);

  return (
    <div>
      <Box m={3}>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={4} md={4}>
            <Stack direction="row" spacing={2}>
              <Avatar style={{ width: '80px', height: '80px' }}>
                <PersonIcon
                  style={{ width: '70px', height: '70px', color: 'black' }}
                />
              </Avatar>
              <Stack>
                <Typography
                  display="inline"
                  variant="h4"
                  style={{ color: '#549CDF' }}
                >
                  {details.name}
                </Typography>
                <Typography
                  display="inline"
                  variant="h6"
                  style={{ color: '#8C8B8B' }}
                >
                  {details.email}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{
                alignContent: 'center',
                height: 70,
              }}
            >
              <Typography
                display="inline"
                variant="h5"
                style={{ color: '#8C8B8B' }}
                align="center"
              >
                {details.relationship}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="right"
              sx={{
                alignContent: 'center',
                height: 70,
              }}
            >
              <Typography
                display="inline"
                variant="h5"
                style={{ color: '#8C8B8B' }}
                align="center"
              >
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: '#DEDEDE',
                      textTransform: 'none',
                      width: '250px',
                      height: '40px',
                      borderRadius: '25px',
                    }}
                    onClick={handleClickOpenSettings}
                    disableElevation
                  >
                    <Typography variant="h5" style={{ color: '#549CDF' }}>
                      Connection Settings
                    </Typography>
                  </Button>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: '#DEDEDE',
                      textTransform: 'none',
                      width: '100px',
                      height: '40px',
                      borderRadius: '25px',
                    }}
                    onClick={handleClickOpenDelete}
                    disableElevation
                  >
                    <Typography variant="h5" style={{ color: '#549CDF' }}>
                      Delete
                    </Typography>
                  </Button>
                </Stack>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Divider />

      <Dialog open={openSettings} onClose={handleCloseSettings}>
        <DialogTitle style={{ width: '500px' }}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Typography
              display="inline"
              variant="h4"
              style={{ color: '#549CDF' }}
            >
              Connection Settings
            </Typography>
          </Box>
        </DialogTitle>
        <DialogContent style={{ width: '500px' }}>
          <br />
          <FormControl variant="standard" fullWidth>
            <InputLabel shrink>
              <Typography variant="h5" style={{ color: '#000000' }}>
                Connection Name:
              </Typography>
            </InputLabel>
            <BootstrapInput
              id="name"
              onChange={(e) =>
                setEditDetails({ ...editDetails, name: e.target.value })
              }
              value={editDetails.name}
            />
          </FormControl>
          <br />
          <br />
          <FormControl variant="standard" fullWidth>
            <InputLabel shrink>
              <Typography variant="h5" style={{ color: '#000000' }}>
                Connection Email:
              </Typography>
            </InputLabel>
            <BootstrapInput
              id="email"
              onChange={(e) =>
                setEditDetails({ ...editDetails, email: e.target.value })
              }
              value={editDetails.email}
            />
          </FormControl>
          <br />
          <br />
          <InputLabel shrink>
            <Typography variant="h5" style={{ color: '#000000' }}>
              Select Reminders to share:
            </Typography>
          </InputLabel>
          <FormControl fullWidth>
            <Select labelId="remiders-to-share" id="remiders-to-share">
              <MenuItem value={1}>All</MenuItem>
            </Select>
          </FormControl>
          <br />
          <br />
          <InputLabel shrink>
            <Typography variant="h5" style={{ color: '#000000' }}>
              Reminder Relationship:
            </Typography>
          </InputLabel>
          <FormControl fullWidth>
            <Select
              labelId="remiders-to-share"
              id="remiders-to-share"
              defaultValue={'They Remind You'}
            >
              <MenuItem value={1}>They Remind You</MenuItem>
              <MenuItem value={2}>You Remind them</MenuItem>
              <MenuItem value={3}>You Remind each other</MenuItem>
            </Select>
          </FormControl>
          <br />
          <br />
          <Stack direction="row">
            <Typography variant="h6" style={{ color: '#000000' }}>
              Email Reminder:
            </Typography>
            <Checkbox {...label} />
          </Stack>
          <br />
          <br />
          <FormControl variant="standard" fullWidth>
            <InputLabel shrink>
              <Typography variant="h5" style={{ color: '#000000' }}>
                Extra Information (optional):
              </Typography>
            </InputLabel>
            <BootstrapInput id="password" />
          </FormControl>
          <br />
          <br />
          <Box display="flex" alignItems="center" justifyContent="center">
            <Button
              variant="contained"
              style={{
                backgroundColor: '#549CDF',
                textTransform: 'none',
                width: '200px',
                height: '50px',
                borderRadius: '25px',
              }}
              onClick={() => {
                setOpenSettings(false);
                setDetails(editDetails);
              }}
              disableElevation
            >
              <Typography variant="h5" style={{ color: '#E5E5E5' }}>
                Edit
              </Typography>
            </Button>
          </Box>
          <br />
          <br />
        </DialogContent>
      </Dialog>

      <Dialog open={openDelete} onClose={handleCloseDelete}>
        <DialogTitle style={{ width: '500px' }}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Typography
              display="inline"
              variant="h4"
              style={{ color: '#549CDF' }}
            >
              Delete Connection
            </Typography>
          </Box>
        </DialogTitle>
        <DialogContent style={{ width: '500px' }}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Typography display="inline" variant="h6">
              Are you sure you want to delete this connection?
            </Typography>
          </Box>
          <br />
          <Box display="flex" alignItems="center" justifyContent="center">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6}>
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
                    onClick={() => deleteConnection(id)}
                    disableElevation
                  >
                    <Typography variant="h5" style={{ color: '#E5E5E5' }}>
                      Delete
                    </Typography>
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: '#DEDEDE',
                      textTransform: 'none',
                      width: '200px',
                      height: '40px',
                      borderRadius: '25px',
                    }}
                    onClick={() => setOpenDelete(false)}
                    disableElevation
                  >
                    <Typography variant="h5" style={{ color: '#549CDF' }}>
                      Cancel
                    </Typography>
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Connection;
