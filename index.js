//IMPORT
const express = require("express");
const app = express();
const port = process.env.PORT|| 4444;
const postsRoutes = require('./routes/posts');
app.use(express.json());

app.get("/",(req,res)=>{
 res.send('hello express from Romeo for Node api 2')
})

app.use('/api/posts',postsRoutes);

// function logger(req, res, next) {
//     console.log("logger function",req);
//     next();
//   }
// app.use(logger());

app.listen(port,err=>{
    if(err){
        console.log("error",err)
    }
    console.log(`listening on ${port}`)
})

