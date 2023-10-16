import { Link } from "react-router-dom"

const UserDetails = ({ setName }) => {
    return (
        <div className="container my-5 w-50">
            <h1 className=" display-5 d-flex justify-content-center mb-4">
                Welcome to Quiz Game
            </h1>
            <div className="mb-3">
                <label className="form-label fs-1 text-center">Your Name</label>
                <input type="text" className="form-control form-control-lg" name="example-text-input" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)} />
            </div>
            <Link className="btn btn-green  d-flex " to="/quizzes">Start Quiz</Link>
        </div>
    )
}

export default UserDetails