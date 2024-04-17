const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const authrouter = require('./routes/Auth');
const NameUpdateRouter = require("./routes/UserUpdate")
const newProductRouter = require("./routes/product")
const newCardRouter = require("./routes/card")
const newOrderRouter = require("./routes/Order")
// const paumentrouter = require("./routes/stripe")

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

const connectDataBase = async()=>{
    try {
        mongoose.connect(process.env.DATA_BASE_URL)
        console.log('Connecting to Database')
    } catch (error) {
        console.log("Database not Connected",error);
    }
}


app.use("/api",authrouter)
app.use("/api",NameUpdateRouter)
app.use("/api",newProductRouter)
app.use("/api",newCardRouter)
app.use("/api",newOrderRouter)
// app.use("/api",paumentrouter)


app.listen(8000,()=>{
    console.log('listening on 8000')
    connectDataBase()
})
