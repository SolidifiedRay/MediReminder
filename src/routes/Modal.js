import React, { useState } from 'react';
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
import { v4 as uuidv4 } from 'uuid';


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

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri',' Sat']

/*

    {
      id: uuidv4(),
      start: new Date('2021-12-01T09:00:00'),
      end: new Date('2021-12-01T10:00:00'),
      title: "Take medicine!",
    },
    {
      id: uuidv4(),
      start: new Date('2021-12-03T09:00:00'),
      end: new Date('2021-12-03T10:00:00'),
      title: "Take medicine!"
    },

*/

export default function BasicModal(props) {

  const { open, setOpen} = props
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [ reminderType, setReminderType ] = React.useState('medication');
  const [ name, setName ] = useState("")
  const [ time, setTime ] = useState("12:00am") 
  const [ weekdays, setWeekdays ] = useState([])
  const [ dosage, setDosage ] = useState("")
  const [ extraInfo, setExtraInfo ] = useState("")
  const { create } = props

  const handleChange = (event) => {
    setReminderType(event.target.value);
  };

  const createReminder = (props) => {
    const reminder = {
      reminderType,
      name, time, 
      weekdays, 
      dosage, 
      extraInfo
    }
    create([    {
      id: uuidv4(),
      start: new Date('2021-12-01T09:00:00'),
      end: new Date('2021-12-01T10:00:00'),
      title: "Take medicine!",
    },
    {
      id: uuidv4(),
      start: new Date('2021-12-03T09:00:00'),
      end: new Date('2021-12-03T10:00:00'),
      title: "Take medicine!"
    },])
    console.log(reminder)
    setOpen(false)
  }

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
                        value={reminderType}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                      <MenuItem value="medication">Mediation</MenuItem>
                      <MenuItem value="reminder">Reminder</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                <TextField 
                  id="Medication Name" 
                  label="Medication Name" 
                  variant="outlined" 
                  style={{width: "100%"}}
                  value={name}
                  onChange={(e)=>{setName(e.target.value)}}

                />
            </div>
            <div>
                <input 
                  value={time}
                  onChange={(e)=>{setTime(e.target.value)}}
                  style={{border: "none", width: "100%", fontSize: 40, textAlign: "center", paddingTop: 30, paddingBottom: 30}}
                />
            </div>
            <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", width: "100%", color: "white", textAlign: "center", marginBottom: 20, cursor: "pointer"}}>
                {
                  days.map((day) => {
                    let color = ''
                    let textColor = ''
                    if(weekdays.includes(day)) {
                      color = "#549CDF"
                      textColor = 'white'
                    } else {
                      color = '#DEDEDE'
                      textColor = 'black'
                    }
                    return  <div 
                              style={{background: color, borderRadius: "50%", width: 50, height: 50, lineHeight: 3, color: textColor}} 
                              onClick={() => {

                                if(weekdays.includes(day))  {
                                  setWeekdays(weekdays.filter((d) => {return d !== day}))
                                } else {
                                  setWeekdays([...weekdays, day])
                                }
                            }}
                            >
                                {day}
                            </div>
                  })
                }
            </div>
            <div style={{marginBottom: 20}}>
                <TextField
                  value={dosage}
                  onChange={(e) => {setDosage(e.target.value)}}
                  id="Dosage" 
                  label="Dosage" 
                  variant="outlined" 
                  style={{width: "100%"}}
                />
            </div>
            <div>
                <TextField
                  value={extraInfo}
                  onChange={(e) => {setExtraInfo(e.target.value)}}
                  id="outlined-textarea"
                  label="Extra Information"
                  placeholder="Optional"
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
            <Button 
              style={{backgroundColor: "#549CDF", "color": "white", width: "100%"}}
              onClick={createReminder}
            > 
              Create 
            </Button>
        </Box>
      </Modal>
    </div>
  );
}
