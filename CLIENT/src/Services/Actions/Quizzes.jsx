import axios from "axios"
const baseUrl = "http://localhost:8990/api/v1"


export const GetQuizzesAction = () => async (dispatch) => {
    try {
        dispatch({ type: "QUIZZES_GET_REQUEST" })
        const { data } = await axios.get(`${baseUrl}/quiz`, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                "Content-Type": "Application/JSON"
            },
            withCredentials: true,
        })

        dispatch({ type: "QUIZZES_GET_SUCCESS", payload: data })
    } catch (error) {
        dispatch({ type: "QUIZZES_GET_FAILED", payload: error?.response?.data?.error })
    }
}

export const CreateQuizzesAction = (QuizzesData) => async (dispatch) => {
    try {
        dispatch({ type: "QUIZZES_CREATE_REQUEST" })
        const { data } = await axios.post(`${baseUrl}/quiz/create`, QuizzesData, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                "Content-Type": "Application/JSON"
            },
            withCredentials: true,
        })
        dispatch({ type: "QUIZZES_CREATE_SUCCESS", payload: data })
        dispatch(GetQuizzesAction())
    } catch (error) {
        dispatch({ type: "QUIZZES_CREATE_FAILED", payload: error?.response?.data?.error })
    }
}