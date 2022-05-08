import React from 'react'
import { TextField } from '@mui/material/'

interface Props {
  label: string
  value: string,
  onChange: (a: any) => void,
}

const Input: React.FC<Props> = ({ label, value, onChange }) => {
    return (
        <TextField
            value={value}
            onChange={onChange}
            autoComplete="off"
            id="outlined-basic"
            label={label}
            variant="outlined"
            className="w-full"
            InputLabelProps={{ style: { color: '#bdbdbd' } }}
            // inputProps={{ style: { color: '#757575' } }}
            // placeholder="ex: sundaymeeting123"
        />
    );
}

export default Input