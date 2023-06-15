import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';

const Calendar = ({setapplieddate, applieddate}) => {
    const [desktopvalues, setdesktopvalues] = React.useState(dayjs('2022-04-17T15:30'));
    
  return (
    <div className="container">
       <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          components={[
            'DateTimePicker',
            'MobileDateTimePicker',
            'DesktopDateTimePicker',
            'StaticDateTimePicker',
          ]}
        >
          <DemoItem label="Select Date and Time">
            <DesktopDateTimePicker defaultValue={desktopvalues} value={desktopvalues} onChange={(newvalue)=>{setdesktopvalues(newvalue); setapplieddate(desktopvalues.$d); console.log(applieddate)}}/>
          </DemoItem>
          <DemoItem>
            <StaticDateTimePicker defaultValue={desktopvalues} value={desktopvalues} onChange={(newvalue)=>{setdesktopvalues(newvalue); setapplieddate(desktopvalues.$d); console.log(applieddate)}}/>
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
      </div>
  );
}

export default Calendar