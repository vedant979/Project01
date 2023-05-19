
import { Container } from '@mui/material'
import { Navbar } from '../../components/Navbar/Navbar'
import { Table } from '../../components/Table/Table'
import {AccordionComp} from "../../components/AccordionComp/AccordionComp"
import ApiData from "../../ApiData.json";
import { useEffect, useState } from 'react';

export const PageSecond = () => {
  const[data, setData] = useState([]);
  useEffect(()=>{
    setData(ApiData);
  },[])
  // console.log(data)
  return (
    <Container className='box-container'>
        <Navbar/>
        <Table/>
        <AccordionComp data_api={data}/>
    </Container>
  )
}
