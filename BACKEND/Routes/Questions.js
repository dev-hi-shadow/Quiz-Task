const express = require('express');
const { CreateQuestion, GetQuestions } = require('../Controllers/Questions');
const router = express.Router();

router.route('/create').post(CreateQuestion)
router.route('/').get(GetQuestions)

module.exports = router