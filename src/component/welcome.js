
import Button from '@mui/material/Button';
export function Welcome() {
    return (
      <div style={{backgroundColor:"MediumSeaGreen",textAlign:"center",height:"100vh"}}>
      <h1>
       welcome to Forgotpassword app 
       this app used to reset your forgoted password
      </h1>
 
       <Button href='/signup' variant="contained"  >
                 Sign UP
             </Button>
       </div>
    )
}