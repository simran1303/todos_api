const route = require('./route.js');
const express =  require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.use('/',route);

//this is my todo list


 
app.listen(port,()=> console.log(`port ${port}`));

