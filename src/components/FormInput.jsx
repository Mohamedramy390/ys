import React from 'react';
import { inputBaseClasses } from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

const FormInput = ({ label, name, value, onChange }) => {
  return (
    <TextField
      name={name}
      value={value}
      onChange={onChange}
      sx={{
        backgroundColor: 'rgba(57, 62, 70, 0.5)',
        border: 'none',
        width: '100%',
      }}
      id={label}
      label={label}
      variant="outlined"
      size="small"
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment
              position="end"
              sx={{
                opacity: 0,
                pointerEvents: 'none',
                [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                  opacity: 1,
                },
              }}
            ></InputAdornment>
          ),
        },
      }}
    />
  );
};

export default FormInput;
