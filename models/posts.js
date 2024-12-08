const mongoose = require('mongoose');
const { type } = require('os');
const { emitWarning } = require('process');
const { types } = require('util');

let postSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    date: {
        type: Date,
        default: Date.now,
    },
    content: String,
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        }
    ]
});

module.exports = mongoose.model('post',postSchema);