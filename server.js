const express = require('express')
const {createBook, filterBook, page} = require('./controller/BookCtrl')
const {connectDb} = require('./config/Db')
const cors = require('cors')

connectDb();
const app = new express()
app.use(express.json())
const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
  };
  
  app.use(cors(corsOpts));

app.post('/create',createBook)
app.post('/search',filterBook)
app.get('/pages',page)

app.listen(5000,()=>{
    console.log("server running")
})