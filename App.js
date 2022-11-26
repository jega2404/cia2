import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import './App.css';

const choices = [{label:'Lime',value:'lime' },
                 { label:'Lavender', value:'lavender' },
                 { label:'Crimson',value:'crimson' },
                 { label:'Darkblue',value:'darkblue' },
                 { label:'Teal',value:'teal'  },
                 { label:'Rebecca Purple', value:'rebeccapurple'},
                 { label:'Ghost White', value:'ghostwhite' },
                 { label:'Aqua Marine', value:'aquamarine' },
                 { label:'aliceblue', value:'aliceblue'},
                ];
export default function ColorSelect() {
  const [choice, setChoice] = React.useState('Lime');

  const handleChange = (cc) => {
    setChoice(cc.target.value);
  };

  return (
    <div>
        <center><h1>COLOR CHANGER</h1></center>
    <Box component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch'},
      }}
      noValidate
      autoComplete="off" >
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={choice}
          onChange={handleChange}
      style={{color:choice,backgroundColor:choice }} >
          {choices.map((choice) => (
            <MenuItem key={choice.value} value={choice.value}>
              {choice.label}
            </MenuItem>
          ))}
        </TextField>
        
    </Box >
    <div className='Container' style={{backgroundColor:choice}}>
    </div>
    <div className='body' onChange={handleChange}
      style={{color:choice,backgroundColor:choice }} >

    </div>
    </div>
  );
}