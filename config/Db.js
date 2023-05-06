const { mongoose } = require("mongoose");

exports.connectDb=async() => {
    try{
        const conn = await mongoose.connect("mongodb+srv://Sownthari:rpsh0105@cluster0.vknqfwz.mongodb.net/books?retryWrites=true&w=majority")
        console.log("db connected")
    }
    catch(e){
        console.log(e)
    }
}