const express = require("express")
const app = express();
const dotenv = require("dotenv")
dotenv.config();
app.use(express.json())
const port = process.env.port
const Userrouters = require('./Routes/UserRouter')
// const Categoryrouetr = require('./Routes/categoryRoute')
const Products =require ('./Routes/productRoute')
app.use('/api/users/', Userrouters,)
// app.use('/api/Cg', Categoryrouetr)
app.use('/api/product', Products)











app.listen(port, console.log(`Server Is Running on ${port} `))
