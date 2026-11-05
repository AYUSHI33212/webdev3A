const express=require('express');
const app=express();
const dotenv=require('dotenv');
const connectDB=require('./config/db');
dotenv.config();
const StudentRoutes=require('./routes/students.routes');
const  PORT=process.env.PORT || 3000;

app.use(express.json());//json data ko parse karne ke liye
app.use("/",StudentRoutes);
connectDB();
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));

