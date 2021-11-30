import React, { useState, useEffect} from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import { v4 as uuidv4 } from 'uuid';
import Grid from '@mui/material/Grid';

// import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import ConnectionList from './ConnectionList'
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import Modal from './Modal'

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

const BusinessHour = (props) => {

  const [businessHour, setEvents] = useState([])
//   useEffect( () => {
   
//     const loadData = async () => {
//       const response = await loadUserInfo();
//       const { data } = response.data
//       const hours = data.businessHour.map((hour) => {
//         return {
//           ...hour,
//           start: new Date(hour.start),
//           end: new Date(hour.end)
//         }
//       })
//       setEvents(hours)
//     }

//     loadData()
//   },[])

  const handleSave = async () => {
    try {
    //   editTimeSlot(businessHour)
      alert('Time updated')
    } catch {
      alert('Error, try again!')
    }
    // dispatch({
    //   type: "COMPLETE_TIME_SLOT",
    //   data: {
    //     businessHour
    //   }
    // })
    // props.handleNext()
  }

  const handleRemove = (e) => {
    const response = prompt("Type 'yes' to remove the session")
    if (response === 'yes') {
      const newDate = businessHour.filter((slot) => {
        return slot.id !== e.id
      })
      setEvents(newDate)
    }
  }

  const handleSelect = ({start, end}) => {
    // handleOpen(true)
    const title = window.prompt('Max Capacity')
    const capacity =  "Capcity:".concat(title)
    if(title) {
      setEvents([...businessHour, {
        id: uuidv4(),
        start,
        end,
        title: capacity,
      }])
    }
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return  <Grid container>
            <Grid item xs={2}>
                <Modal open={open} setOpen={setOpen} />
                <Grid container>
                    <Grid xs={12} onClick={()=>{handleOpen()}} style={{"backgroundColor": "#549CDF", textAlign: "center", paddingTop: 30, paddingBottom: 30, margin: 10, cursor: "pointer"}}>
                        <AddIcon style={{background: "white", borderRadius: "50%", color: "#549CDF", fontSize: 50}}/>
                        <div style={{color: "white", fontSize: 30, marginTop: 20}} >
                            Create Reminder
                        </div>
                    </Grid>
                    <Grid xs={12} style={{"backgroundColor": "#DEDEDE", textAlign: "center", paddingTop: 30, paddingBottom: 30, margin: 10}}>
                        <SearchIcon style={{borderRadius: "50%", color: "#549CDF", fontSize: 50}}/>
                        <div style={{color: "white", fontSize: 30, marginTop: 20}}>
                            Search
                        </div>
                    </Grid>
                    <Grid xs={12} style={{textAlign: "center"}}>
                        <ConnectionList />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={10}>
                    <DnDCalendar
                        onSelectSlot = {handleSelect}
                        defaultDate={moment().toDate()}
                        onNavigate = {(e) => {console.log(e)}}
                        onView = {(e) => {console.log(e)}}
                        defaultView="week"
                        onDoubleClickEvent = {handleRemove}
                        events={businessHour}
                        localizer={localizer}
                        resizable
                        views={["week"]}
                        selectable = {true}
                        style={{ height: "75vh" }}
                    />      
            </Grid>
           </Grid>
}


export default BusinessHour;