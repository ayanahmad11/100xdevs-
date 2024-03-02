import { useEffect,useState } from "react";
import {useParams} from "react-router-dom";
import {Typography,Card,TextField,Button} from '@mui/material';
import { atom,useSetRecoilState,useRecoilValue,useRecoilState } from 'recoil';



function Course1(){
    
    console.log("course")
    
    let { courseId } = useParams();
    
    const setCourses = useSetRecoilState(coursesState);

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

    return <div style={{display:"flex" , flexWrap:"wrap",justifyContent:"center"}} >
       
        <CourseCard courseId ={courseId} ></CourseCard>
        
        <UpdateCard courseId ={courseId} />
       
        {/* {JSON.stringify(courses)}
        {courseId}
        <br></br>
        {JSON.stringify(course)} */}

    </div>

    function CourseCard(props){

       console.log("course card")
        
        const courses = useRecoilValue(coursesState)
        let course =null;
        for(let i=0;i<courses.length;i++){
            if(courses[i].id==props.courseId)
              {
                   course = courses[i];
              }
        }
        if(!course)
        {
            return "lloadung "
        }
         
       return  <div style={{display:"flex", justifyContent:"center"}}>
                <Card style = {{
          
          margin :10,
          width : 300,
          minHeight:200 
      }} >
         <Typography textAlign={"center"}variant="h6">{course.title} </Typography> 
         <Typography textAlign={"center"} variant="subtitle1" >{course.description }</Typography>
          <img src={course.imagelink} style= {{width:300}}></img>
          </Card>
        </div>
   }
    
    function UpdateCard(props){
        console.log("hi there from updatedCard")
        const [title,setTitle] = useState("");
        const [description,setdescription] = useState("");
        const [image,setImage] = useState("");
        const course = props.course;
        const [courses,setCourses] = useRecoilState(coursesState); 
        console.log("update card rerendered")
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
                                            for(let i=0;i<courses.length;i++){
                                                if(courses[i].id == props.courseId ){
                                                    UpdatedCourses.push({
                                                        id: props.courseId,
                                                        title : title,
                                                        description : description,
                                                        imagelink : image
                                                    })
                                                    
                                                }
                                                else{
                                                    UpdatedCourses.push(courses[i]);
                                                }
                                                
                                            }
                                         setCourses(UpdatedCourses);
                                        })
                                    }
                                    
                                    fetch("http://localhost:3000/admin/courses/" + props.courseId,{
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

const coursesState = atom(
    {
        key : 'coursesState',
        default :'',

    }
);