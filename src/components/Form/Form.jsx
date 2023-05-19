import  { useState } from 'react'
import { Box, Button, TextField } from '@mui/material';
import "./Form.css"
import {  useNavigate } from 'react-router-dom';
export const Form = () => {
  const navigate = useNavigate();
  const[emailError, setEmailError] = useState(false);
  const[nameError, setNameError] = useState(false);
  const[numError, setNumError] = useState(false);
  const[formValue, setFormValues] = useState({
    name:"",
    email:"",
    number:""
  });
  // if()
  const handleChangeName = (event)=>{
    setFormValues({...formValue, [event.target.name]:event.target.value});
  }
  const handleSubmit = ()=>{
    // localStorage.setItem("Data", JSON.stringify(formValue));
    if(formValue.email===''){
      setEmailError(true);
    }
    if(formValue.name===''){
      setNameError(true);
    }
    if(formValue.number===''){
      setNumError(true);
    }

  }
  const handleFormSubmit=()=>{
    localStorage.setItem("Data", JSON.stringify(formValue));
    navigate("/Details");

  }
  console.log(formValue)
  return (
    <Box className="box-container"> 
        <form className="form-container" onSubmit={handleFormSubmit}>
            <TextField className='input-type'  name="name" type="text" label="Name" size= "normal" variant='outlined' 
              error={nameError}
              onChange={handleChangeName}
              value={formValue.name}
            required></TextField>
            <TextField className='input-type' type="email" name="email" label="Email Address" size= "normal" variant='outlined' 
              onChange={handleChangeName}
              value={formValue.value}
              error={emailError}
              required></TextField>
            <TextField className='input-type' type="text" name="number" label="Phone Number" size= "normal" variant='outlined' 
              onChange={handleChangeName}
              value={formValue.number}
              error={numError}
              required></TextField>
              {/* <Link to="/Details"> */}
                <Button className='btn-submit' type='submit' variant='contained' onSubmit={handleSubmit}>Submit</Button>
              {/* </Link> */}
        </form>

    </Box>
  )
}
