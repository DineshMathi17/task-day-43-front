import React from "react"
import Button from '@mui/material/Button';
export function Dashboard() {
    return (
      <div style={{backgroundColor:"MediumSeaGreen",textAlign:"center",height:"100vh"}}>
         <h1>
       your login is successfully...
      </h1>
      <Button href='/signup' variant="contained"  >
             Signup
             </Button>
      </div>
     
    )
}

