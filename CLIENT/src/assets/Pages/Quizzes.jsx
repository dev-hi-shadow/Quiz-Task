import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetQuizzesAction } from "../../Services/Actions/Quizzes"
import { Link } from "react-router-dom"

const Quizzes = () => {
    const dispatch = useDispatch()
    const { GetQuizzes } = useSelector(state => state.quizState)

    useEffect(() => {
        dispatch(GetQuizzesAction())
    }, [dispatch])

    return (
        <>
        
            <div className="container my-5">
                <h1 className="mb-3 ">select any one quiz</h1>
                <div className="row">
                    {Array.isArray(GetQuizzes?.data) && GetQuizzes?.data?.length > 0 ? GetQuizzes?.data?.map((quiz, index) => {
                        return (<div className="col-4" key={index}>
                            <Link to={`/quiz?${quiz._id}`} className="card card-link card-link-pop">
                                <div className="card-body py-5">
                                    <span className="p-5 h3">
                                        {quiz.name}
                                    </span>
                                </div>
                            </Link>
                        </div>)
                    }) : null}
                </div>
            </div>

        </>
    )
}

export default Quizzes
