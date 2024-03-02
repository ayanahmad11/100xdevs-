import { useEffect,useState } from "react";
import {useParams} from "react-router-dom";
import {Typography,Card,TextField,Button} from '@mui/material';
import {Course} from "./courses.jsx"


function Course1(){
    
    let { courseId } = useParams();
    
    const[courses,setCourses] = useState([]);

    useEffect(() => {
        function callback2(data){
            console.log(data);
            setCourses(data.courses);
        }
        function callback1(res){
            res.json().then(callback2)
        }
        fetch("http://localhost:3000/admin/courses/",{

                method: "GET",
                headers: {
                    "Authorization":"Bearer " + localStorage.getItem("token")     
            }
        }).then(callback1)
    },[]);
   
    let course =null;
    for(let i=0;i<courses.length;i++){
        if(courses[i].id==courseId)
            {
                course = courses[i];
            }
    }

    if(!course){
        return <div>
            Loading...
        </div>
    }
   
    return <div style={{display:"flex" , flexWrap:"wrap",justifyContent:"center"}} >
       
        <Course course = {course} ></Course>
        
        <UpdateCard courses = {courses} course = {course} setCourses =  {setCourses}></UpdateCard>
       
        {/* {JSON.stringify(courses)}
        {courseId}
        <br></br>
        {JSON.stringify(course)} */}

    </div>
    
    
    function UpdateCard(props){
    
        const [title,setTitle] = useState("");
        const [description,setdescription] = useState("");
        const [image,setImage] = useState("");
        const course = props.course;
  
            return <div>
                    <div style={{display:"flex", justifyContent:"center"}}>
                        
                        <Card variant="outlined" style={{width:400, padding:20}}>
                             <Typography>update Course details</Typography>            
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
                                            alert("courses updated")
                                            // console.log(data);
                                            let UpdatedCourses = [];
                                            for(let i=0;i<props.courses.length;i++){
                                                if(props.courses[i].id == course.id ){
                                                    UpdatedCourses.push({
                                                        id: course.id,
                                                        title : title,
                                                        description : description,
                                                        imagelink : image
                                                    })
                                                    
                                                }
                                                else{
                                                    UpdatedCourses.push(props.courses[i]);
                                                }
                                                
                                            }
                                            props.setCourses(UpdatedCourses);
                                        })
                                    }
                                    
                                    fetch("http://localhost:3000/admin/courses/" + course.id,{
                                        method:"PUT",
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
                                    Update course
                            </Button>

                            </Card>
                            

                </div>

        </div>
 }

}
export default Course1;