const mongoose = require('mongoose')


const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    publisher:{
        type: String,
        required: true
    },
    subject:{
        type: Array,
        required: true,
        default:[]
    },
    availability:{
        type: Number,
        default: 0
    },
    total:{
        type: Number,
        default:0
    },
    date_of_publish:{
        type: String,
        required:true
    },
    access_number:{
        type: Number,
        required:true
    },
    language:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    image:{
        type: String
    }
    
}, {
    timestamps: true
})


module.exports = mongoose.model("books", bookSchema)