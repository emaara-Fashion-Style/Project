const express=require ("express")
const app = express();
const dotenv =require("dotenv")
dotenv.config();
app.use(express.json)
 const port =process.env.port

 const Userrouters = require('./Routes/UserRouter')
app.use('/api/User/', Userrouters)
app.listen(port, console.log(`Server Is Running on ${port} `))



