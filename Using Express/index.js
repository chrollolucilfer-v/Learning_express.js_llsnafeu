// to use express first we have to import it just like any other module

import express from "express";

const app = express();
// creating a instance of express and storing it in app
const port = 8000;


app.get("/", (req,res)=>{
    res.send("<h1> Welcome to my express learning journey</h1>")
})


app.listen(port, () => console.log("First Express Use"));



