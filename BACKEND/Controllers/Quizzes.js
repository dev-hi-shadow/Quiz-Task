const Quizzes = require("../Model/Quizzes")



exports.CreateQuiz = async (req, res, next) => {
    try {
        const { name } = req.body
        const exists = await Quizzes.exists({ name })
        if (exists) {
            return res.status(409).json({ status: 409, success: false, message: "already exists" })
        }
        const quiz = await Quizzes.create({ name })
        res.status(201).json({ status: 201, success: true, message: "quiz created" })
    } catch (error) {
        res.status(500).json({ status: 500, success: false, message: error.message })
    }
}

exports.GetQuiz = async (req, res) => {
    try {
        const data = await Quizzes.find({}).lean()
        res.status(201).json({ status: 201, success: true, message: "quiz fetched", data })

    } catch (error) {
        res.status(500).json({ status: 500, success: false, message: error.message })
    }
}