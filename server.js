//Declare variables
const express =require ('express')
const app =express()
const bodyParser =require('body-parser')
const ejs = require('ejs')
const mongoose =require('mongoose')
require('dotenv').config()



/*const MongoClient =require('mongodb').MongoClient
const connectionString ='mongodb+srv://patash248:TzypCJvmBkYSTxzZ@cluster0.o1o3um2.mongodb.net/?retryWrites=true&w=majority'

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database...')
  })
  .catch(error => console.error(error))*/

const Todo =require("./models/todo")
const { request } = require('http')


const PORT =process.env.PORT || 3000

//set middleware
//app.use(express.urlencoded({extended:true}))
app.set('view engine' ,'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


mongoose.connect(process.env.DB_CONNECTION ,{useNewUrlParser: true})
.then(client => {
    console.log('Connected to Database...')
  })
  .catch(error => console.error(error))



//routes
//GET method
app.get('/' ,(req,res) =>{
    Todo.find()
    .then(result =>{
        res.render('index' ,{data :result})
        console.log(result)
})
})

//POST method
app.post("/" ,(req,res) =>{
    const todo = new Todo({
        todo : req.body.todoValue
    })
    todo.save()
    .then(result => {
        res.redirect("/")
    })
})

//UPDATE method or edit

app.delete('/' ,(req,res) =>{
  Todo.findByIdAndDelete(req.params.id)
  .then(result =>{
    console.log(result)
  })
})



//setup port

app.listen(PORT,function() {
    console.log(`listening on port ${PORT}`)
   });