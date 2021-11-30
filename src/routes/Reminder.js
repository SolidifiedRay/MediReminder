import React, { useState, useEffect} from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import { v4 as uuidv4 } from 'uuid';

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

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

  return (
    <div style={{padding:30,width:"70%", margin:"auto"}}>
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
    </div>
  );


}


export default BusinessHour;