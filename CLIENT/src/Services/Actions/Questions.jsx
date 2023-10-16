import axios from "axios"
const baseUrl = "http://localhost:8990/api/v1"


export const GetQuestionsAction = () => async (dispatch) => {
    try {
        dispatch({ type: "QUESTIONS_GET_REQUEST" })
        const { data } = await axios.get(`${baseUrl}/questions`, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                "Content-Type": "Application/JSON"
            },
            withCredentials: true,
        })
        dispatch({ type: "QUESTIONS_GET_SUCCESS", payload: data })
    } catch (error) {
        dispatch({ type: "QUESTIONS_GET_FAILED", payload: error?.response?.data?.error })
    }
}

export const CreateQuestionsAction = (QuestionsData) => async (dispatch) => {
    try {
        dispatch({ type: "QUESTIONS_CREATE_REQUEST" })
        const { data } = await axios.post(`${baseUrl}/questions/create`, QuestionsData, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                "Content-Type": "Application/JSON"
            },
            withCredentials: true,
        })
        dispatch({ type: "QUESTIONS_CREATE_SUCCESS", payload: data })
        dispatch(GetQuestionsAction())
    } catch (error) {
        dispatch({ type: "QUESTIONS_CREATE_FAILED", payload: error?.response?.data?.error })
    }
}