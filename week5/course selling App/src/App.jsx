import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from "./signin.jsx"
import Signup from "./signup.jsx"
import Appbar from './Appbar.jsx';
import Addcourse from './Addcourse.jsx';
import Courses from './courses.jsx';
import Course1 from './course';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
// import { useHistory } from 'react-router';
// import { useHistory } from 'react-router-dom';

// This file shows how you can do routing in React.
// Try going to /login, /register, /about, /courses on the website and see how the html changes
// based on the route.
// You can also try going to /random and see what happens (a route that doesnt exist)
function App() {
 
    return (
      <div style={{width:"100vw",
      height:"100vh",
      backgroundColor:"#eeeeee"}}>
        <RecoilRoot>
        <Router>
           <Appbar/>
            <Routes>
                <Route path = {"/course/:courseId"} element = {<Course1/>} />
                <Route path= "/addcourse" element={<Addcourse/>} />
                <Route path= "/courses" element={<Courses/>}/>
                <Route path="/" element={<Signup />} />  
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
            
            </Routes>
        </Router>


        </RecoilRoot>
          
      </div>
      
    );
}

export default App;