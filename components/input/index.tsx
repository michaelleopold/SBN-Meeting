import React from 'react'
// import { TextField } from '@mui/material'
// import { TextField } from '@material-ui/core'

interface Props {
  label: string
  value: string,
  onChange: (a: any) => void,
}

const Input: React.FC<Props> = ({ label, value, onChange }) => {
    return (
        // <TextField
        //     value={value}
        //     onChange={onChange}
        //     autoComplete="off"
        //     id="outlined-basic"
        //     label={label}
        //     variant="outlined"
        //     className="w-full"
        //     // InputLabelProps={{ style: { color: '#bdbdbd' } }}
        //     // inputProps={{ style: { color: '#757575' } }}
        //     // placeholder="ex: sundaymeeting123"
        // />
        <input
            value={value}
            onChange={onChange}
            type="text"
            autoComplete="off"
            placeholder="meeting id"
            className='h-[3rem] px-2 w-full text-gray-600 border-[1px] border-gray-500 shadow-lg rounded-md active:border-blue-500 hover:border-gray-400'
        />
    );
}

export default Input