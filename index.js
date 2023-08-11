const express = require('express')
const dotenv = require('dotenv')
const {engine}  = require('express-handlebars')
const app = express()
const db = require("./models/index")
//env connect
dotenv.config()

// Register `hbs.engine` with the Express app.
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

//JSON buffer
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Intelase router
app.use('/diary',require('./routes/diary.routes'))
//server running
const PORT = process.env.PORT || 4000

const start = async ()=>{
    try {
        await db.sequelize.sync()
        app.listen(PORT, ()=>{
            console.log(`Server running on port: ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()