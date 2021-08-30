const mongoose = require('mongoose')
require('dotenv').config({path:'./DB/.env'})


const connectDB = async() => {
    try {
        // mongoose.set('useCreateIndex', true);
        await mongoose.connect(process.env.MONGO_URI,  {useNewUrlParser: true, useUnifiedTopology: true,'useCreateIndex': true, useFindAndModify: false })
        console.log('db connected')
    } catch (err) {
        console.log(`db error ${err.message} !!`)
    }
}
module.exports = connectDB