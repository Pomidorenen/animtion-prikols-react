require('dotenv').config();
const express = require('express');
const path = require('path');

const imagesRouter = require('./routers/images.router.js');
const notesRouter = require("./routers/notes.router.js");
const weatherRouter = require("./routers/weather.router");

const PORT = process.env.PORT || 8080;
const app = express();



const pathImage = path.resolve(__dirname,"./static/images");
app.use(express.json());
app.use("/images",express.static(pathImage));

app.use("/images",imagesRouter);
app.use("/api/notes",notesRouter);
app.use("/api/weather",weatherRouter)

app.get("/",(req,res)=>{
    res.send("Hello World!");
});


app.listen(PORT,()=>{
    console.log(PORT)
    console.log(`Listening on port ${PORT}`);
})