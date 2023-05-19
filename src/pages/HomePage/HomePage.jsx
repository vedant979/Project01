import {  Container } from '@mui/material'
import { Navbar } from '../../components/Navbar/Navbar'
// import React from 'react'
import "./HomePage.css"
import { Form } from '../../components/Form/Form'

export const HomePage = () => {
  return (
    <Container sx={{
      display:"flex",
      flexDirection:"column",
      height:"100vh"
    }}>
      <Navbar/>
      <Form/>
    </Container>
  )
}
