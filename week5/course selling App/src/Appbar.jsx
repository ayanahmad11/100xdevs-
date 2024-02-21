import{Typography} from "@mui/material";
import Button from "@mui/material/Button"
function Appbar(){
   return <div style={{
    display:"flex",
    justifyContent:"space-between", // "center" "felx-end ","flex-end" // flex only works at one level
    padding:4
  }} >
                                    
        <div>
    <Typography variant = {"h6"}>Coursera</Typography>
    </div>
    
    <div style={{display:"flex"}}>
             <div style={{marginRight:10}}>
                 <Button variant={"contained"}> Sign up</Button>
             </div>
             <div style={{marginRight:10}}>
                 <Button variant = {"contained"} > Sign in</Button>
             </div>
    

    </div>
    
    
   </div> 
  
}
export default Appbar