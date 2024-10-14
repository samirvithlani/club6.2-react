import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const MuiTable2 = () => {
  const [users, setusers] = useState([]);

  useEffect(() => {
    getALlUSers();
  }, []);


  const deleteUser = async (id) => {
    console.log(id)
    alert(id)
  }
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 200,
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
    },
    {
      field: "age",
      headerName: "Age",
      width: 150,
    },
    {
        field:"Action",
        headerName:"Action",
        width:350,
        renderCell :(params)=>{
            return(
                <div>
                    <button className="btn btn-warning">Edit</button>
                    <button onClick={()=>{deleteUser(params.id)}} className="btn btn-danger">Delete</button>
                </div>
            )
        }
    }
  ];

  const getALlUSers = async () => {
    const res = await axios.get("https://node5.onrender.com/user/user");
    setusers(res.data.data);
  };
  return (
    <Box style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={users}
        columns={columns}
        getRowId={(row) => row._id}
      ></DataGrid>
    </Box>
  );
};
