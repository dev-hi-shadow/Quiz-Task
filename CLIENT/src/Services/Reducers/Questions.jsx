import { createReducer } from "@reduxjs/toolkit";

const initialState = {}
export const QuestionsReducer = createReducer(initialState, {
    QUESTIONS_CREATE_REQUEST: (state) => {
        state.loading = true
    },
    QUESTIONS_CREATE_SUCCESS: (state, action) => {
        state.loading = false
        state.AddQuestions = action.payload
    },
    QUESTIONS_CREATE_FAILED: (state, action) => {
        state.loading = false
        state.AddQuestions = undefined
        state.error = action.payload
    },
    QUESTIONS_GET_REQUEST: (state) => {
        state.loading = true
    },
    QUESTIONS_GET_SUCCESS: (state, action) => {
        state.loading = false
        state.GetQuestions = action.payload
    },
    QUESTIONS_GET_FAILED: (state, action) => {
        state.loading = false
        state.GetQuestions = undefined
        state.error = action.payload
    }, 
})