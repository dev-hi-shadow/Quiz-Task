/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { GetQuestionsAction } from "../../Services/Actions/Questions"
import { useLocation, useNavigate } from "react-router-dom"
import { GetQuizzesAction } from "../../Services/Actions/Quizzes"
import Countdown from "react-countdown"

const Quiz = ({ setResult, result }) => {
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const Location = useLocation()
    const { GetQuestions } = useSelector(state => state.questionState)
    const { GetQuizzes } = useSelector(state => state.quizState)
    const [Questions, setQuestions] = useState([])
    const [UserAnswerIndex, setUserAnswerIndex] = useState()
    const [Quiz, setQuiz] = useState()
    let [currentQuestion, setCurrentQuestion] = useState(0)
    const [timeLeft, setTimeLeft] = useState(Questions[0]?.time_limit || 10);



    useEffect(() => {
        dispatch(GetQuestionsAction())
        dispatch(GetQuizzesAction())
    }, [dispatch])

    useEffect(() => {
        const id = Location?.search.split("").splice(1).join("")
        const questions = Array.isArray(GetQuestions?.data) && GetQuestions?.data?.filter((questions) => {
            return questions.quiz_ids.includes(id)
        })
        setQuestions(questions)
        const quiz = Array.isArray(GetQuizzes?.data) && GetQuizzes?.data?.find((quiz) => {
            return quiz._id === id
        })
        setQuiz(quiz)

    }, [GetQuestions, GetQuizzes?.data, Location?.search])

    const handleSubmit = (event) => {
        event.preventDefault()
        setResult({
            ...result,
            questions: [...result.questions, { question_id: Questions?.[currentQuestion]?._id, Answers: Questions?.[currentQuestion]?.answers, userAnswer: UserAnswerIndex }]
        })
        setUserAnswerIndex(undefined)
        handleNext()
    }
    const handleNext = () => {
        if (currentQuestion + 1 < Questions.length) {
            setCurrentQuestion((prevQuestion) => prevQuestion + 1);
            setTimeLeft(Questions[currentQuestion + 1]?.time_limit || 10);
        } else {
            Navigate("/result")
            console.log("NAVIGATED")
        }
    }
    useEffect(() => {
        setTimeLeft(Questions[currentQuestion]?.time_limit || 10);
    }, [currentQuestion, Questions]);

    return (
        <>
            <div className="container mt-5 mx-auto">
                <h1 className="text-center mb-5">{Quiz?.name} QUIZ</h1>

                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <h2 className="mb-2">
                            {currentQuestion + 1}. {Questions?.[currentQuestion]?.title}
                        </h2>
                        <div className="row mb-4">
                            <div className="form-selectgroup">
                                {Questions?.[currentQuestion]?.options?.map((option, index) => {
                                    return (
                                        <label className="form-selectgroup-item" key={index}>
                                            <input
                                                type="checkbox"
                                                name="options"
                                                value={option}
                                                className="form-selectgroup-input"
                                                onClick={() => setUserAnswerIndex(index)}
                                                checked={UserAnswerIndex === index}

                                            />
                                            <span className="form-selectgroup-label ">{option}</span>
                                        </label>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="buttons d-flex justify-content-between">
                            <div className="row">
                                <Countdown
                                    key={timeLeft}
                                    date={Date.now() + (timeLeft * 1000)}
                                    onComplete={() => handleNext()}
                                />
                                <input type="submit" value="Submit" className="btn btn-blue" />
                            </div>
                            <button className="mx-3 btn btn-outline-green"
                                onClick={handleNext}
                                disabled={currentQuestion + 1 === Questions?.length}>
                                Next Question
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Quiz
