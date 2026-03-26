const express = require('express')
const dotenv = require('dotenv').config()

const authRoutes = require('./Routes/authRoutes')

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5001;

// app.get("/",(req,resp)=>{
//     resp.send("Handled by Auth-services")
// })

// app.get("/test",(req,resp)=>{
//     resp.send("Handled by Auth-services test")
// })

app.use("/",authRoutes);

app.listen(PORT,()=>{
    console.log(`Auth-services is running on port ${PORT}`);
})

