const express = require('express');
require('./config/mongoDB');
const cors = require('cors');
const bodyParser = require('body-parser')
const port = 8990
const app = express()


app.use(cors({
    origin: ("http://localhost:4173"),
    credentials: true
}));
app.use(bodyParser.json())


app.use("/api/v1/quiz", require('./Routes/Quizzes'))
app.use("/api/v1/questions", require('./Routes/Questions'))


app.listen(port, () => {
    console.log(`listening on port ${port}`);
})