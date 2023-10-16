endpoints : 

fetching question  : http://localhost:8990/api/v1/questions 
creating question  : http://localhost:8990/api/v1/questions/create 

fetching quizzes  : http://localhost:8990/api/v1/quiz 
creating quizzes : http://localhost:8990/api/v1/quiz/create  


creating question template :-
{
    "title": " title of question ",
    "quiz_ids": [
        "ABCDXYZ12345" 
    ] # want to take this question in any quiz, id of those quiz
    "time_limit": "6", #timing for those question (in seconds)(default 10)
    "options": [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4",
    ],
    "answers": [
        2
    ] # index number of the answer from the option
}

creating quiz template :-
{
    "name" : " name" #name of the quiz
}
