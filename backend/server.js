const express = require('express')
const connectddb = require('./backend/config/connectdb')
const ContactRouter = require('./routes/contact')

const app = express()

const port = 5000

// link db
connectddb()
//les routes
app.use(express.json())
app.use('/api/user',ContactRouter)



app.listen(port,err=>{
    err?console.log(err):console.log(`You are on port ${port}`)
})
