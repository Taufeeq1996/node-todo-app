import express from 'express';
import { addTodo, delTodo, getTodos, updateTodo } from '../controllers/todo.controllers.js';


const router = express.Router(); 


router.post('/',addTodo)

router.get('/', getTodos) 

router.delete('/', delTodo)

router.patch('/', updateTodo);

export default router;