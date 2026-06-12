// to use express first we have to import it just like any other module

import express from "express";

const app = express();
// creating a instance of express and storing it in app
const port = 8000;

// // basic routing

// app.get("/about", (req, res) => {
//   res.sendFile("About page");
// });

// // HTTP methods
// // Gett retrived data
// // post create/insert data
// // put completely update data
// // patch partially update data
// //delelte delete data
// // ALL any http method

// // advanced routing

// // string pattern path  ( you will not be usign these in real life at all)
// app.get("/ab?cd", (req, res) => {
//   res.send("If the user hit adc or abcd then this will run");
// });

// // regex     this path will only work if string contains users and 4 digit number
// app.get(/^\/users\/[0-9]{4}$/, (req, res) => {
//   res.send("if the path includes the letterx x it will work.");
// });

// // advacne routing

// app.get("./products/iphone", (req, res) => {
//   res.send("This codw will only run if you provide  product/inphone");
// });

// app.get(
//   "./single-cb",
//   (req, res,next) => {
//     // res.send("Single Callback")
//     console.log("first callback");
//     next();
//   },
//   (req, res) => {
//     res.send("Second Vallback");
//   },
// );

// const cb1 = (req,res)=>{
//   console.log
// }

// app.get("/array-cb",)

// console.clear()

// const cb1 = (req,res, next) -=>{
//   console.log('second callback')
//   next()

// }

// app.get("/", (req, res) => {
//   res.send("<h1> Welcome to my express learning journey</h1>");
// });

// // ugly code
// app.get('/student', (req,res)=>{
//   res.send("All Student")
// })

// app.post('/student', (req,res)=>{  // create data or insert data
//   res.send("Add new student")
// })

// app.put('/student', (req,res)=>{  // updatin all students
//   res.send("Update student")
// })
// app.delete('/student', (req,res)=>{   // delte all students
//   res.send("Delete student")
// })

// refractor
// app.route() returns a instance of route
// to avoid duplicate code

// app.route('/student').get((req,res)=>{
//   res.send("All Students")
// }).post((req,res)=>{
//   res.send("add new student")
// }).put((req,res)=>{
//   res.send("Update the student")
// }).delete((req,res)=>{
//   res.send("Delete Student")
// })
// we can use route to chain all these method in one instead of douing one by one before
// thhis is how we can cast our api or route

// refractoring all that ugly code
// to use route

// we are not using get, put , post etc

// Routing

// 1. Create Routes folder and put your routes in a seprate file
// 2. create instance of express.ROuter()
// 3. instead of app.method change that to router.method
// 4/ export router
// 5. import router
// 6. use the (app.use) built in middleware which provides your routes.

import students from "./Routes/student.js";
import teachers from "./Routes/teacher.js";

app.use("/students", students);
app.use("/teachers", teachers);

app.listen(port, () => console.log("First Express Use"));
