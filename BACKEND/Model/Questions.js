const mongoose = require('mongoose');
const question_schema = new mongoose.Schema({
    title: { type: String, required: true },
    quiz_ids: { type: Array, required: true },
    time_limit: { type: Number, required: true },
    options: [{ type: String, required: true, max: 4, min: 4 }],
    answers: [{ type: Number, required: true, min: 1 }],
}, {
    autoCreate: true, versionKey: false, timestamps: true
})


const Questions = mongoose.model('questions', question_schema)
module.exports = Questions