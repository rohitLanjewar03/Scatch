const mongoose = require('mongoose');


const ownerSchema = mongoose.Schema({
    fullname:{
        type: String,
        minlength: 3,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    products:{
        type: Array,
        default: []
    },
    picture:{
        type: String
    },
    gstin: String
})

module.exports = mongoose.model("owner",ownerSchema);