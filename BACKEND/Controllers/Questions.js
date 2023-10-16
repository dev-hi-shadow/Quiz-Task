const Questions = require("../Model/Questions")


exports.CreateQuestion = async (req, res, next) => {
    try {
        const { title, quiz_ids, time_limit, options, answers, } = req.body
        const exists = await Questions.exists({ title })
        if (exists) {
            return res.status(409).json({ status: 409, success: false, message: "already exists" })
        }
        if (Array.isArray(options) && options.length !== 4) {
            return res.status(401).json({ status: 401, success: false, message: "Option Must be an array and should be 4 elements" });
        }
        if (Array.isArray(answers) && answers.length < 1) {
            return res.status(401).json({ status: 401, success: false, message: "Answer Must be an array and should be atleast one of them in the option" });
        }
        const quiz = await Questions.create({ title, quiz_ids, time_limit, options, answers, })
        res.status(201).json({ status: 201, success: true, message: "question created", data: quiz })
    } catch (error) {
        res.status(500).json({ status: 500, success: false, message: error.message })
    }
}

exports.GetQuestions = async (req, res, next) => {
    try {
        const questions = await Questions.find({}).populate( ).lean()
        res.status(200).json({ status: 200, success: true, message: "question fetched", data: questions })
    } catch (error) {
        res.status(500).json({ status: 500, success: false, message: error.message })
    }
}