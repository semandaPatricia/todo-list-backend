const express = require ('express')
const router = express.Router()
const todoController = require ('../controllers/todoController')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, todoController.getTodos)

router.post('/createTodos', todoController.createTodos)

router.put('/taskComplete', todoController.taskComplete)

router.put('/taskNotComplete', todoController.taskNotComplete)

router.put('/updateTodo', todoController.updateTodo)

router.delete('/deleteTodo', todoController.deleteTodo)




module.exports = router