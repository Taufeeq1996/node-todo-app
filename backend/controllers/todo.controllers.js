import Task from "../models/task.models.js";


export const addTodo = async(req, res) => {
    const {title,completed} = req.body;
    
    if(!title){
        return res.status(400).json({error:"please add a title"})
    } 

    const response = await Task.create({title,completed});

    // Task.save();
    return res.status(201).json(response);
}

export const getTodos = async(req,res) => {
    // const {title, completed} = res.body;

    // if(!title){
    //     return res.status(400).json({error:"unable to fetch todos"});
    // }

    const response = await Task.find();

    return res.status(200).json(response);
}

export const delTodo = async(req,res) => {
    const {_id} = req.body;

    const response = await Task.deleteOne({_id});

    return res.status(200).json(response);
}

export const updateTodo = async(req,res) => {
    const {title, completed, _id} = req.body;
    
    const response = await Task.updateOne({_id}, {title,completed});

    return res.status(200).json(response);
}