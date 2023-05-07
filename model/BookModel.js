const mongoose = require('mongoose')


const bookSchema = new mongoose.Schema({
    product_id:{
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    title:{
        type: String,
        trim: true,
        required: true
    },
    author:{
        type: String,
        trim: true,
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
    checked:{
        type: Boolean,
        default: false
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
    }
    
}, {
    timestamps: true
})


module.exports = mongoose.model("Books", bookSchema)