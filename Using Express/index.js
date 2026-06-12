// to use express first we have to import it just like any other module

import express from "express";

const app = express();
// creating a instance of express and storing it in app
const port = 8000;

// basic routing
app.get("/", (req, res) => {
  res.send("<h1> Welcome to my express learning journey</h1>");
});

app.get("/about", (req, res) => {
  res.sendFile("About page");
});

// HTTP methods
// Gett retrived data
// post create/insert data
// put completely update data
// patch partially update data
//delelte delete data
// ALL any http method

// advanced routing

// string pattern path  ( you will not be usign these in real life at all)
app.get("/ab?cd", (req, res) => {
  res.send("If the user hit adc or abcd then this will run");
});

// regex     this path will only work if string contains users and 4 digit number
app.get(/^\/users\/[0-9]{4}$/, (req, res) => {
  res.send("if the path includes the letterx x it will work.");
});






// advacne routing

app.get('./products/iphone',(req,res)=>{
  res.send("This codw will only run if you provide  product or inphone")
})






app.listen(port, () => console.log("First Express Use"));
