import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import React from 'react'
import TextField from "@mui/material/TextField";

export default function SearchBar()
{
  return(
    <center>
    <div className="main">
   
    <div className="search">
      <TextField
        id="outlined-basic"
        
        variant="outlined"
        fullWidth
        label="Search..."
      />
    </div>
  
  </div>
  </center>
  );
}
