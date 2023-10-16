const express = require('express');
const { CreateQuiz, GetQuiz } = require('../Controllers/Quizzes');
const router = express.Router();

router.route('/create').post(CreateQuiz)
router.route('/').get(GetQuiz)
module.exports = router