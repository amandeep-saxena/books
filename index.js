const express = require('express');
const app = express();
var bodyParser = require('body-parser')

require('dotenv').config()
console.log(process.env)
const mongoose = require("mongoose");



//model //
const BOOK = require('./model/book')





app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())




mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected! successfull-------- '))
    .catch((err) => {
        console.log(err)
    })




//create books //



app.post('/books', async (req, res)=> {
    const title= req.body.title;
    const author = req.body.author;
    const summary = req.body.summary
    const bookExist = await BOOK.findOne({titles : title});

    if (bookExist) return res.send('Book already exist');
    var data = await BOOK.create({title,author,summary});
    data.save();
    res.send("Book Uploaded");
});



app.get('/books' ,async(req,res) =>{
    const bookList = await BOOK.find();
    console.log(bookList);
    res.send(bookList);
})




app.get('/books/:id', async  (req, res) => {
    const { id } = req.params;

    const book = await BOOK.findOne({id : id});

    if(!book) return res.send("Book Not Found");
    res.send(book);
});







app.listen(4000, console.log("hii done"))