const mongoose = require('mongoose')
const { emitWarning } = require('process')

mongoose.connect("mongodb://127.0.0.1:27017/mini-project");

let userSchema = mongoose.Schema({
    username: String,
    name: String,
    age: Number,
    email: String,
    password: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "post",
        }
    ],
});

module.exports = mongoose.model('user',userSchema);