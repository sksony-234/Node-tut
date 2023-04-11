import express from 'express';
const app = express();
import fs from 'fs';
import path from 'path';

const port = 5000;

app.get('/', (req, res) => {
    res.status(200).send("What you want to do next just tell me about that so that I well preaper the plan for that.")
    // res.status(200).send("Hello how are you. tell me something about yourself so that it will help me aloat to maintain the some special things");
    //Only the first one will be printed
});


//three ways of serving Html File over server
//first way
app.get('/about', (req, res) => {
    fs.readFile('./index.html', 'utf8', (err,data)=>{
        res.status(200).send(data);
    })
})

//second way:
const home = fs.readFileSync('./index.html', 'utf8');       //Here the file type must be syncronous otherwise it wll not work.
app.get('/home', (req, res) => {
    res.status(200).send(home);
});


//third Way:
const home2 = path.join(path.resolve(), './index.html');
app.get('/home2', (req, res) => {
    res.status(200).sendFile(home2);
});

app.listen(port, ()=>{
    console.log(`Your server is running on http://localhost:${port}`);
});