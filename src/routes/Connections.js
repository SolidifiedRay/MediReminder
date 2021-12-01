import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Connection from '../components/Connection';
import Button from '@mui/material/Button';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { Stack } from '@mui/material';

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

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Home() {
  const [openAddNewConnection, setOpenAddNewConnection] = useState(false);
  const handleClickOpenAddNewConnection = () => {
    setOpenAddNewConnection(true);
  };
  const handleCloseAddNewConnection = () => {
    setOpenAddNewConnection(false);
  };

  const dummy = [
    {
      id: '1',
      name: 'Jack',
      email: 'jack@gmail.com',
      relationship: 'They remind you',
    },
    {
      id: '2',
      name: 'Tom',
      email: 'tom@gmail.com',
      relationship: 'You remind them',
    },
    {
      id: '3',
      name: 'Lucy',
      email: 'lucy@gmail.com',
      relationship: 'They remind you',
    },
  ];

  const [connections, setConnections] = useState(dummy);
  const [newConnection, setNewConnection] = useState({
    id: '',
    name: '',
    email: '',
    relationship: 'They remind you',
  });

  const deleteConnection = (id) => {
    const newList = connections.filter((c) => c.id !== id);
    setConnections(newList);
  };

  return (
    <div>
      <br />
      <Box display="flex" alignItems="center" justifyContent="center">
        <Typography
          display="inline"
          variant="h2"
          style={{ color: '#000000' }}
          align="center"
        >
          Connections
        </Typography>
      </Box>
      <br />
      {connections.map((c) => (
        <Connection
          name={c.name}
          email={c.email}
          relationship={c.relationship}
          id={c.id}
          deleteConnection={deleteConnection}
        />
      ))}
      <br />
      <br />
      <Box display="flex" alignItems="center" justifyContent="center">
        <Button
          variant="contained"
          style={{
            backgroundColor: '#549CDF',
            textTransform: 'none',
            width: '400px',
            height: '50px',
            borderRadius: '25px',
          }}
          onClick={handleClickOpenAddNewConnection}
          disableElevation
        >
          <Typography variant="h4" style={{ color: '#E5E5E5' }}>
            Add New Connection
          </Typography>
        </Button>
      </Box>

      <Dialog open={openAddNewConnection} onClose={handleCloseAddNewConnection}>
        <DialogTitle style={{ width: '500px' }}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Typography
              display="inline"
              variant="h4"
              style={{ color: '#549CDF' }}
            >
              Add Connection
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
                setNewConnection({ ...newConnection, name: e.target.value })
              }
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
                setNewConnection({ ...newConnection, email: e.target.value })
              }
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
            <Select labelId="remiders-to-share" id="remiders-to-share">
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
                setConnections([...connections, newConnection]);
                setOpenAddNewConnection(false);
              }}
              disableElevation
            >
              <Typography variant="h5" style={{ color: '#E5E5E5' }}>
                Add
              </Typography>
            </Button>
          </Box>
          <br />
          <br />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Home;
