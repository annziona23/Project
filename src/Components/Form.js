import { Button, TextField, Typography, } from '@mui/material'
import { blue } from '@mui/material/colors';


import React from 'react'
import { useForm } from 'react-hook-form';


const Form = () => {

    const {handleSubmit} =useForm();
    const getVal=(val) =>{

        alert('Form submitted');
    
        
    }
        
            
       
    
  return (
    <div>
        <br/>
        <br/>
        <br/>
      <Typography variant='h4'color={blue}>Blog Form</Typography>
      <br/>
      <br/>
      <TextField variant='outlined' label='Blog Name'></TextField>
      <br/>
      <br/>
      <TextField variant='outlined'label='Description'></TextField>
      <br/>
      <br/>
      <TextField variant='outlined'label='Author name'></TextField>
      <br/>
      <br/>
      <Button onClick={handleSubmit(getVal)} variant='contained'>SUBMIT</Button>
      
    </div>
  )
}

export default Form
