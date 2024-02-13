const express = require('express');
const app = express();

app.use(express.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];

const adminAuthentication = (req, res, next) => {
  const { username, password } = req.headers;
  // const username = req.headers.username;
  // const password = req.headers.passwprd;
  console.log("control reaches here")
  const admin = ADMINS.find(a => a.username === username && a.password === password);
  if (admin) {
    next();
  } else {
    res.status(403).json({ message: 'Admin authentication failed' });
  }
};

const userAuthentication = (req, res, next) => {
  const { username, password } = req.headers;
  const user = USERS.find(u => u.username === username && u.password === password);
  if (user) {
    req.user = user;  // Add user object to the request
    next();
  } else {
    res.status(403).json({ message: 'User authentication failed' });
  }
};

app.post('/admin/signup', (req, res) => {  // this lets the user signup
  const admin = req.body;
  const existingAdmin = ADMINS.find(a => a.username === admin.username);
  if (existingAdmin) {
    res.status(403).json({ message: 'Admin already exists' });
  } else {
    ADMINS.push(admin);
    console.log(ADMINS)
    res.json({ message: 'Admin created successfully' });
  }
});
function fn1(req,res,next){
  console.log("Hi")
  next();
}
// adminAuthentication is route specific middleware.
app.post('/admin/login', fn1,adminAuthentication, (req, res) => {
  res.json({ message: 'Logged in successfully' });
});

app.post('/admin/courses', adminAuthentication, (req, res) => {
  const course = req.body;
 if(!course.title){
  return res.json(411).send("msg: please send me title");

 }
  course.id = Date.now(); // use timestamp as course ID
  COURSES.push(course);
  res.json({ message: 'Course created successfully', courseId: course.id });
});

app.put('/admin/courses/:courseId', adminAuthentication, (req, res) => {
  const courseId = parseInt(req.params.courseId);
  const course = COURSES.find(c => c.id === courseId);
  console.log("lelo"+course.title)
  if (course) {
    Object.assign(course, req.body);// in memory replacig the original  instance of  course
    // course.title = req.body.title; // same thing is done above
    // course.price = req.body.price;
    res.json({ message: 'Course updated successfully' });
  } else {
    res.status(404).json({ message: 'Course not found' });
  }
});

app.get('/admin/courses', adminAuthentication, (req, res) => {
  res.json({ courses: COURSES });
});

app.post('/users/signup', (req, res) => {
  // const user = {...req.body, purchasedCourses: []};
  // The line is using the spread syntax (...) to create a shallow copy of the req.body object,
  //  and then adding an additional property purchasedCourses with an empty array as its value. 
  //  This is a concise way to take all the properties from req.body and include 
  // them in the new user object while also adding or overriding some specific properties.
  const user = {
    username: req.body.username,
    password: req.body.password,
    purchasedCourses: []
  }
  USERS.push(user);
  res.json({ message: 'User created successfully' }); 
});

app.post('/users/login', userAuthentication, (req, res) => {
  res.json({ message: 'Logged in successfully' });
});

app.get('/users/courses', userAuthentication, (req, res) => {
  // COURSES.filter(c => c.published)
  let filteredCourses = [];
  for (let i = 0; i<COURSES.length; i++) {
    if (COURSES[i].published) {
      filteredCourses.push(COURSES[i]);
    }
  }
  res.json({ courses: filteredCourses });
});

app.post('/users/courses/:courseId', userAuthentication, (req, res) => {
  const courseId = Number(req.params.courseId);
  const course = COURSES.find(c => c.id === courseId && c.published);
  if (course) {
    // var username = req.headers["username"];
    // find user in the global array
    // update the user object 
    //remove the old user obeject to the users global array
    // add the new user object to the users global array

    req.user.purchasedCourses.push(courseId);
    console.log( req.user.purchasedCourses); 
    res.json({ message: 'Course purchased successfully' });
  } else {
    res.status(404).json({ message: 'Course not found or not available' });
  }
});

app.get('/users/purchasedCourses', userAuthentication, (req, res) => {
  // const purchasedCourses = COURSES.filter(c => req.user.purchasedCourses.includes(c.id));
  // We need to extract the complete course object from COURSES
  // which have ids which are present in req.user.purchasedCourses
  var purchasedCourseIds = req.user.purchasedCourses; [1, 4];
  var purchasedCourses = [];
  for (let i = 0; i<COURSES.length; i++) {
    if (purchasedCourseIds.indexOf(COURSES[i].id) !== -1) { // purchaseCourseIds.indexOf(x) gives on which index x is present in purchaseCourseIds
      purchasedCourses.push(COURSES[i]);
    }
  }

  res.json({ purchasedCourses });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
