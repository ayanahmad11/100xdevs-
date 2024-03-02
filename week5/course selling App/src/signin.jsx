import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Card,Typography} from '@mui/material';
function Signin(props){
    return <div>
       

        
            <div style={{
              paddingTop :150  ,
              marginBottom:10,
              display:"flex",
              justifyContent:"center"  
            }}>
                <Typography variant={"h6"}>
                Welcome Back.
                Sign in below
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
                    id="email"
                    label="Email"
                    variant="outlined" />
                    <br></br>
                    <br></br>

                    <TextField fullWidth={true} 
                    id="password"
                    label="Password"
                    variant="outlined" />

                    <br></br>
                    <br></br>

                    <Button size={"large"} variant="contained"
                    onClick={()=>{
                        
                    }}
                    
                    >Sign in</Button>

        </Card>
              

       </div>
       
    </div>
}
export default Signin