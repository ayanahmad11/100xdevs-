import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Card,Typography} from '@mui/material';
import { useState } from 'react';
function Signup(props){
    // any variable that dynamically changes should be defined as below
    const [email , setemail] = useState("");
    const [password,setpassword] = useState("");

    
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

                    < TextField 
                    onChange = {(e)=>{
                        setemail(e.target.value)
                    }}
                     fullWidth={true}
                    id={"username"}
                    label="Email"
                    variant="outlined" />
                    <br></br>
                    <br></br>

                    <TextField
                    onChange={(e)=>{
                        setpassword(e.target.value)
                    }}
                    fullWidth={true} 
                    id={"password"}
                    label="Password"
                    variant="outlined" />

                    <br></br>
                    <br></br>

                    <Button 
                    size={"large"}
                    variant="contained"
                    onClick={()=>{
                        function callback1(res){
                            res.json().then((data)=>{
                                localStorage.setItem("token",data.token)
                                window.location = "/"
                                console.log(data);

                            })
                        }
                        
                        fetch("http://localhost:3000/admin/signup",{
                               method:"POST",
                            body: JSON.stringify({
                                username:email,
                                password:password
                            }), // headers are sent because otherwise body won't be parsed
                            headers: { 
                              "Content-type": "application/json"      
                            }
                        }).then(callback1)
                        console.log(username); 
                    }}
                    >Sign up</Button>

        </Card>
              

       </div>
       
    </div>
}
export default Signup