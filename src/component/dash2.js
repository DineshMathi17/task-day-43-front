import React from "react"
import Button from '@mui/material/Button';
export function Dashboard2() {
    return (
      <div style={{backgroundColor:"MediumSeaGreen",textAlign:"center",height:"100vh"}}>
         <h1>
       your password is successfully reset
      </h1>
      <Button href='/login' variant="contained"  >
             Login
             </Button>
      </div>
     
    )
}

