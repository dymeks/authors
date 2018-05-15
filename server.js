const express = require('express');
const bp = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

app.use(bp.json());
app.use(express.static(path.join(__dirname,'./client/dist/client')));
// app.set('views',path.join(__dirname,'./client/views'));

require('./server/config/routes.js')(app);
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./client/dist/client/index.html"))
  });

app.listen(8000,function(){
    console.log("listening on port 8000");
})