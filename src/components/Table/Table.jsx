import  { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import axios from 'axios';
export const Table = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    async function fetchData(){
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  },[])
      const row = data.map((data)=>{
        return(
            {
                id:data.id,
                col1:data.id,
                col2:data.title,
                col3:data.body
            }
        )
      })
      const columns = [
        { field: 'col1', headerName: 'Id', width: 250   },
        { field: 'col2', headerName: 'Title', width: 500 },
        { field: 'col3', headerName: 'Body', width: 400 },

      ];

  return (
    <Box className="table-container" sx={{marginTop:10}}>
      <h1 className='header' style={{textAlign:"center",
      fontSize:"30px",
      fontFamily:"sans-serif"
    }}
    >Table Data</h1>
        <DataGrid rows={row} columns={columns}  sx={{
          padding:"20px",
        }}/>
    </Box>
  )
}
