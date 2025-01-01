import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';


const  DataPicker = () => {
  return (
    <LocalizationProvider  dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'MobileDatePicker',
        ]}
        sx={{ width: '100%', 
         overflow: 'hidden', padding: '0px', border: '0px', paddingLeft: '-10px'}}
      >
        
        
          <MobileDatePicker sx={{
        
        borderRadius: '4px', 
        width: '100%', 
        height: '', 
        fontSize: '0.55rem', 
        paddingLeft: '8px', 
        outline: 'none', 
        border:'none'
      }} defaultValue={dayjs('2022-04-17')}/>
        
       
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default DataPicker;