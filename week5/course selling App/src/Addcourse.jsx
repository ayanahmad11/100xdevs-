import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Card,Typography} from '@mui/material';
import { useState } from 'react';
function Addcourse(){
    const [title,setTitle] = useState("");
    const [description,setdescription] = useState("");
    const [image,setImage] = useState("");
return <div>
        <div style={{display:"flex",
                            justifyContent:"center"
                            }}>
                
                <Card variant="outlined" style={{
                            width:400,
                            padding:20
                            }}>

                    < TextField 
                            onChange = {(e)=>{
                             setTitle(e.target.value)       
                            }}
                            fullWidth={true}
                            id={"title"}
                            label="title"
                            variant="outlined" />
                    < TextField 
                            onChange = {(e)=>{
                               setdescription(e.target.value)     
                            }}
                            fullWidth={true}
                            id={"description"}
                            label="description "
                            variant="outlined" />
                    < TextField 
                            onChange = {(e)=>{
                               setImage(e.target.value)     
                            }}
                            fullWidth={true}
                           
                            label="Image Link "
                            variant="outlined" />

                        <Button 
                           size={"large"}
                           variant="contained"
                           onClick={()=>{
                               function callback1(res){
                                   res.json().then((data)=>{
                                    //    localStorage.setItem("token",data.token)
                                    alert("courses Added")
                                       console.log(data);
       
                                   })
                               }
                               
                               fetch("http://localhost:3000/admin/courses",{
                                   method:"POST",
                                   body: JSON.stringify({
                                        title,
                                        description,
                                        imagelink : image,
                                        published: true,

                                   }), // headers are sent because otherwise body won't be parsed
                                   headers: { 
                                     "Content-type": "application/json" ,
                                     "Authorization":"Bearer " + localStorage.getItem("token")     
                                   }
                               }).then(callback1)
                             
                           }}>
                            Add course
                    </Button>

                    </Card>
                    

        </div>

</div>

}
export default Addcourse