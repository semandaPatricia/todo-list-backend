const express =require ('express')

const cors =require('cors')
const mongoose = require ('mongoose')
const connectDB = require('./config/database')
const ejs = require('ejs')
const authRoutes = require('./routes/auth')
const homeRoutes = require('./routes/homePageRoute')
const todoRoutes = require('./routes/todoRoutes')

require('dotenv').config({path: './config/.env'})

const app = express()
app.use(cors())


const PORT =process.env.PORT || 8080
connectDB()

//set middleware
//app.use(express.urlencoded({extended:true}))
app.set('view engine' ,'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json()) 



//routes
app.get('/', (req, res) => {
  res.send('hello world ')

})  



//setup port

app.listen(PORT,function() {
    console.log(`listening on port ${PORT}`)
   });