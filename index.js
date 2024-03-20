import express from "express";  
import bodyParser from "body-parser";


const app = express();

const port = 3050;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",async (req,res)=>{
    res.render("index.ejs");
})


app.post("/search", async (req,res)=>{
    const Service = req.body.Service;
    const Pincode = req.body.Pincode;  


    console.log(Service+" "+Pincode);
})


app.listen(port, ()=>{
    console.log(`Listening at port ${port}`);
})