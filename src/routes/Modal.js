import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Input } from '@mui/material';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function BasicModal(props) {

  const { open, setOpen} = props
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div style={{marginBottom: 20}}>
                <FormControl style={{width: "100%"}}>
                    Select Type of Reminder
                    <Select
                        style={{marginTop: 10}}
                        value={age}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                <TextField id="Medication Name" label="Medication Name" variant="outlined" style={{width: "100%"}}/>
            </div>
            <div>
                <input value={"12:00 am"} style={{border: "none", width: "100%", fontSize: 40, textAlign: "center", paddingTop: 30, paddingBottom: 30}}/>
            </div>
            <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", width: "100%", color: "white", textAlign: "center", marginBottom: 20}}>
                <div style={{background: "#549CDF", borderRadius: "50%", width: 50, height: 50, lineHeight: 3}} >
                    Sun
                </div>
                <div style={{background: "#549CDF", borderRadius: "50%", width: 50, height: 50, lineHeight: 3}} >
                    Mon
                </div>
                <div style={{background: "#549CDF", borderRadius: "50%", width: 50, height: 50, lineHeight: 3}} >
                    Tue
                </div>
                <div style={{background: "#549CDF", borderRadius: "50%", width: 50, height: 50, lineHeight: 3}} >
                    Wed
                </div>
                <div style={{background: "#549CDF", borderRadius: "50%", width: 50, height: 50, lineHeight: 3}} >
                    Thu
                </div>
                <div style={{background: "#549CDF", borderRadius: "50%", width: 50, height: 50, lineHeight: 3}} >
                    Fri
                </div>
                <div style={{background: "#549CDF", borderRadius: "50%", width: 50, height: 50, lineHeight: 3}} >
                    Sat
                </div>
            </div>
            <div style={{marginBottom: 20}}>
                <TextField id="Dosage" label="Dosage" variant="outlined" style={{width: "100%"}}/>
            </div>
            <div>
                <TextField
                id="outlined-textarea"
                label="Multiline Placeholder"
                placeholder="Placeholder"
                multiline
                style={{width: "100%"}}
                rows={6}
                />
            </div>
            <div>
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Email Reminder" />
                </FormGroup>
            </div>
            <Button style={{backgroundColor: "#549CDF", "color": "white", width: "100%"}}> Create </Button>
        </Box>
      </Modal>
    </div>
  );
}
