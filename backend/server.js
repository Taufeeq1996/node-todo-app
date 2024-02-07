// console.log('todo app')

import express from 'express';
import mongoose from 'mongoose';
import "dotenv/config";
import todoRoutes from './routes/task.routes.js'

const app = express(); 
const port = process.env.PORT || 4000;
const Mongo_uri = process.env.MONGO_URI

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/task',todoRoutes);

mongoose.connect(Mongo_uri).then(
    app.listen(port, ()=>{
        console.log(`server running on http://localhost:${port}`)
    } )
);


