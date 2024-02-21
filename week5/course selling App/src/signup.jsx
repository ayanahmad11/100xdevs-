import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Card,Typography} from '@mui/material';
function Signup(props){
    return <div>
       

        
            <div style={{
              paddingTop :150  ,
              marginBottom:10,
              display:"flex",
              justifyContent:"center"  
            }}>
                <Typography variant={"h6"}>
                Welcome to Coursera.
                Sign up below
                </Typography>
 
               
            </div>


       <div style={{display:"flex",
                    justifyContent:"center"
                    }}>
         
         <Card variant="outlined" style={{
                    width:400,
                    padding:20
                    }}>

                    < TextField fullWidth={true}
                    id="outlined-basic"
                    label="Email"
                    variant="outlined" />
                    <br></br>
                    <br></br>

                    <TextField fullWidth={true} 
                    id="outlined-basic"
                    label="Password"
                    variant="outlined" />

                    <br></br>
                    <br></br>

                    <Button size={"large"} variant="contained">Sign up</Button>

        </Card>
              

       </div>
       
    </div>
}
export default Signup