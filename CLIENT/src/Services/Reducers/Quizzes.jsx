import { createReducer } from "@reduxjs/toolkit";

const initialState = {}
export const QuizzesReducer = createReducer(initialState, {
    QUIZZES_CREATE_REQUEST: (state) => {
        state.loading = true
    },
    QUIZZES_CREATE_SUCCESS: (state, action) => {
        state.loading = false
        state.AddQuizzes = action.payload
    },
    QUIZZES_CREATE_FAILED: (state, action) => {
        state.loading = false
        state.AddQuizzes = undefined
        state.error = action.payload
    },
    QUIZZES_GET_REQUEST: (state) => {
        state.loading = true
    },
    QUIZZES_GET_SUCCESS: (state, action) => {
        state.loading = false
        state.GetQuizzes = action.payload
    },
    QUIZZES_GET_FAILED: (state, action) => {
        state.loading = false
        state.GetQuizzes = undefined
        state.error = action.payload
    }, 
})