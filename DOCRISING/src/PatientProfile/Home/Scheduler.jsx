// import React, { useState, useRef } from "react";
// // import { render } from "react-dom";
// import { Button, Modal } from "react-bootstrap";
// import {
//   ScheduleComponent,
//   Day,
//   Week,
//   WorkWeek,
//   Month,
//   Agenda,
//   Inject,
//   Resize,
//   DragAndDrop
// } from "@syncfusion/ej2-react-schedule";
// // import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";

// const MyModel = ({ show, onClose, onSave, onCreated }) => (
//   <Modal show={show} onHide={onClose} centered>
//     {/* Rest of the Modal code */}
//   </Modal>
// );

// const Scheduler = () => {
//     const [showModal, setShowModal] = useState(false);
//   const data = useRef({});
//   const scheduleObj = useRef(null);

//   const onPopupOpen = args => {
//     if (args.type === "Editor") {
//       args.cancel = true;
//       data.current = args.data;
//       setShowModal(true);
//     }
//   };

//   const onAfterCreated = args => {
//     var dialog = document.querySelector(".custom-event-editor");
//     var subject = dialog.querySelector("#Summary");
//     subject.value = data.current.Subject ? data.current.Subject : "Add title";
//     var startTime = dialog.querySelector("#StartTime").ej2_instances[0];
//     startTime.value = data.current.StartTime ? data.current.StartTime : new Date();
//     var endTime = dialog.querySelector("#EndTime").ej2_instances[0];
//     endTime.value = data.current.EndTime ? data.current.EndTime : new Date();
//   };

//   const saveModal = args => {
//     var app = {};
//     var dialog = document.querySelector(".custom-event-editor");
//     var subject = dialog.querySelector("#Summary");
//     app.Subject = subject.value;
//     var startTime = dialog.querySelector("#StartTime").ej2_instances[0];
//     app.StartTime = startTime.value;
//     var endTime = dialog.querySelector("#EndTime").ej2_instances[0];
//     app.EndTime = endTime.value;

//     scheduleObj.current = document.querySelector(".e-schedule").ej2_instances[0];
//     if (data.current.Id) {
//       scheduleObj.current.saveEvent(app);
//     } else {
//       scheduleObj.current.addEvent(app);
//     }
//     setShowModal(false);
//   };

//   return (
//     <>
//       <ScheduleComponent popupOpen={onPopupOpen} ref={scheduleObj}>
//         <Inject
//           services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
//         />
//       </ScheduleComponent>
//       <MyModel
//         show={showModal}
//         onCreated={onAfterCreated}
//         onClose={() => setShowModal(false)}
//         onSave={saveModal}
//       />
//     </>
//   )
// };

// export default Scheduler;

// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import { ViewState } from '@devexpress/dx-react-scheduler';
// import {
//   Scheduler,
//   DayView,
//   Appointments,
// } from '@devexpress/dx-react-scheduler-material-ui';

// const currentDate = '2018-11-01';
// const schedulerData = [
//   { startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Meeting' },
//   { startDate: '2018-11-01T12:00', endDate: '2018-11-01T13:30', title: 'Go to a gym' },
// ];

// const Schedulers =() =>{ 
//     return (
//   <Paper>
//     <Scheduler
//       data={schedulerData}
//     >
//       <ViewState
//         currentDate={currentDate}
//       />
//       <DayView
//         startDayHour={9}
//         endDayHour={14}
//       />
//       <Appointments />
//     </Scheduler>
//   </Paper>
// );
// }
// export default Schedulers;