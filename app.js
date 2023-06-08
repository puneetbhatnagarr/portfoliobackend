const express = require('express')
const app = express()
app.use(express.json());
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
var cloudinary = require('cloudinary');

const fileUpload = require("express-fileupload");
app.use(fileUpload({useTempFiles: true}));

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
app.use(cookieParser())
dotenv.config({path:".env"})

const cors=require('cors');
app.use(cors());

const {connectdb} = require('./Db/connect_db.js')
const web = require('./routes/web.js');

app.use(bodyParser.json())

app.use(express.static('public'))

connectdb();

app.use("/api/my",web)



  
app.get("/",(req,res)=>{
    res.send('hello i am api')

})

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`Server is Running at PORT : ${PORT}`);
    });