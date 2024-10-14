import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'

export const MuiTable = () => {
    //json
    //rows/
    //columns

    const columns=[
        {
            field:"id",
            headerName:"ID",
            width:100
        },
        {
            field:"firstName",
            headerName:"First Name",
            width:150
        },
        {
            field:"lastName",
            headerName:"Last Name",
            width:150
        },
        {
            field:"age",
            headerName:"Age",
        }
    
    ]

    const rows =[
        {
            id:1,
            lastName:"Snow",
            firstName:"Jon",
            age:35
        },
        {
            id:2,
            lastName:"Lannister",
            firstName:"Cersei",
            age:42
        },
        {
            id:3,
            lastName:"Lannister",
            firstName:"Jaime",
            age:45
        },
        {
            id:4,
            lastName:"Stark",
            firstName:"Arya",
            age:16
        },
        {
            id:5,
            lastName:"Targaryen",
            firstName:"Daenerys",
            age:40
        },
        {
            id:6,
            lastName:"Melisandre",
            firstName: null,
            age:150
        },
        {
            id:7,
            lastName:"Clifford",
            firstName:"Ferrara",
            age:44
        },
        {
            id:8,
            lastName:"Frances",
            firstName:"Rossini",
            age:36
        },
        {
            id:9,
            lastName:"Roxie",
            firstName:"Harvey",
        }
    ]

  return (
    <div>
        <h1>MUI TABLE</h1>
        <Box sx={{height:"400px",width:"auto"}}>
        <DataGrid rows={rows} columns={columns}></DataGrid>
        </Box>
    </div>
  )
}
