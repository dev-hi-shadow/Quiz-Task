const mongoose = require('mongoose');
const quizzes_schema = new mongoose.Schema({
    name: { type: String, required: true },
}, {
    autoCreate: true, versionKey: false, timestamps: true
})

const Quizzes = mongoose.model("quizzes", quizzes_schema)
module.exports = Quizzes