import express= require("express")

const app = express();

app.get("/signup",(req,res)=>{
    res.send("Hello world")

})

app.listen(3001)