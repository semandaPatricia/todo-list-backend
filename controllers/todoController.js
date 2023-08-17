const Todo = require('../models/todo')

//GET method       Get sth

const getTodos = async(req,res) =>{
    console.log(req.user)
    try{
        //Do we want to grab all the todos?
        const todoList = await Todo.find()
        //How can we grab our logged in users left to dos?
        const todosLeft = await Todo.countDocuments({completed: false})
        res.render('todos.ejs', {todos: todoList, left: todosLeft, user: req.user})
    }catch(err){
        console.log(err)
    }
};
    

//POST method      make sth

const createTodos = async(req,res) =>{
   
    try{
        await Todo.create({todo: req.body.todoList, completed: false, microsoftId: req.user.microsoftId})
        console.log('Todo has been added!')
        res.redirect('/todos')
    }catch(err){
        console.log(err)
    }
};

//Update
 const taskComplete = async (req, res)=>{
    try{
        await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
            completed: true
        })
        console.log('Marked Complete')
        res.json('Marked Complete')
    }catch(err){
        console.log(err)
    }
};  
 const taskNotComplete = async (req, res)=>{
    try{
        await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
            completed: false
        })
        console.log('Marked Incomplete')
        res.json('Marked Incomplete')
    }catch(err){
        console.log(err)
    }
};


//UPDATE method    edit or change sth
const updateTodo = async(req, res) => {
    try {
        const {id} = req.params;
        const todoList = await Todo.findByIdAndUpdate(id, req.body);
        // we cannot find any product in database
        if(!todoList){
            res.status(404);
            throw new Error(`cannot find any product with ID ${id}`);
        }
        const updatedTodo = await Todo.findById(id);
        res.status(200).json(updatedTodo);
        
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
}

//Delete      remove sth
const deleteTodo = async (req, res)=>{
    console.log(req.body.todoIdFromJSFile)
    try{
        await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
        console.log('Deleted Todo')
        res.json('Deleted It')
    }catch(err){
        console.log(err)
    }
}


module.exports = { 
    getTodos,
    createTodos,
    taskComplete,
    taskNotComplete,
    updateTodo,
    deleteTodo
  }