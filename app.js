const express = require('express')
const app = express()
const connectDB = require('./DB/connectDB')
const contactRoutes = require('./routes/contact')

connectDB()
app.use(express.json())
app.use('/api/contacts', contactRoutes)

const port = 5000

app.listen(port, ()=>console.log(`server running on port ${port}`))