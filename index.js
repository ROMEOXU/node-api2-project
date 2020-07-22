const express = require("express");
const app = express();
const port = process.env.port || 4444;
app.use(express.json());
app.get("/",(req,res)=>{
 res.send('hello express from Romeo')
})
const postsRoutes = require('./routes/posts');
app.use('/api/posts',postsRoutes);

app.listen(port,err=>{
    if(err){
        console.log("error",err)
    }
    console.log(`listening on ${port}`)
})