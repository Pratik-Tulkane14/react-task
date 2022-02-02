import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";

const DnDCalendar = withDragAndDrop(Calendar);

const localizer = momentLocalizer(moment);

const events = [
 
  {
    id: 0,
    title: "Class",
    start: new Date(2022, 1, 3),
    end: new Date(2022, 1, 3),
    desc: "Description is shown here"
  },
  {
    id: 0,
    title: "Coading Round",
    start: new Date(2022, 1, 4),
    end: new Date(2022, 1, 4),
    desc: "Description is shown here"
  },
  {
    id: 0,
    title: "Exercise",
    start: new Date(2022, 1, 5),
    end: new Date(2022, 1, 5),
    desc: "Description is shown here"
  }
];

const onEventDrop = ({ event, start, end, allDay }) => {
  console.log("event clicked");
  console.log(start, event, end, allDay);
};

const Scheduler = () => {
  return (
    <>
      <div className="wrapper" style={{ minHeight: "100vh" }}>
        <DnDCalendar
          selectable
          events={events}
          startAccessor="start"
          endAccessor="end"
          defaultDate={moment().toDate()}
          localizer={localizer}
          toolbar
          resizable
          onEventDrop={onEventDrop}
          components={{
            event: EventComponent,
            agenda: {
              event: EventAgenda
            }
          }}
          onSelectSlot={() => console.log("selected")}
          onSelectEvent={event => alert(event.desc)}
        />
      </div>
    </>
  );
};

export default Scheduler;

const EventComponent = ({ start, end, title }) => {
  return (
    <>
      <p>{title}</p>
      <p>{start}</p>
      <p>{end}</p>
    </>
  );
};

const EventAgenda = ({ event }) => {
  return (
    <span>
      <em style={{ color: "magenta" }}>{event.title}</em>
      <p>{event.desc}</p>
    </span>
  );
};