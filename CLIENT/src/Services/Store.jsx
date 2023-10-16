import { configureStore } from "@reduxjs/toolkit";
import { QuizzesReducer } from "./Reducers/Quizzes";
import { QuestionsReducer } from "./Reducers/Questions";

export const Store = configureStore({
    reducer: {
        quizState: QuizzesReducer,
        questionState: QuestionsReducer


    }
})
