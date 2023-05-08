const express = require('express')
const { createBook, filterBook, page } = require('./controller/BookCtrl')
const { connectDb } = require('./config/Db')
const cors = require('cors')

connectDb();
const app = new express()
app.use(express.json())


app.use(cors());

app.post('/api/search', createBook)
app.post('/search', filterBook)
app.get('/searching', page);


app.listen(5000, () => {
  console.log("server running")
})