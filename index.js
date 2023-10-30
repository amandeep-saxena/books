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



app.post('/books', async (req, res) => {
    const title = req.body.title;
    const author = req.body.author;
    const summary = req.body.summary
    const bookExist = await BOOK.findOne({ title: title });
    console.log(bookExist)

    // if (bookExist) return res.send('Book already exist');
    var data = await BOOK.create({ title, author, summary });
    data.save();
    res.send("Book Uploaded");
});



app.get('/books', async (req, res) => {
    const bookList = await BOOK.find();
    console.log(bookList);
    res.send(bookList);
})




app.get('/books/:id', async (req, res) => {

    const { id } = req.params;
    await BOOK.findOne({ _id: id }).then((resp) => {
        res.send(resp)
    }).catch((error) => {
        console.log(error)
    })
    // res.send(book);

});





app.delete('/books/:id', async function (req, res) {
    const { id } = req.params;
    const bookExist = await BOOK.findOne({ _id: id });

    if (!bookExist) return res.send('Book Do Not exist');

    await BOOK.deleteOne({ _id: id }).then(function () {
        console.log("Data deleted"); // Success
        res.send("Book Record Deleted Successfully")

    }).catch(function (error) {
        console.log(error); // Failure
    });
});









app.listen(4000, console.log("hii done"))