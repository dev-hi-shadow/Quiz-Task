
import { Route, Routes } from 'react-router-dom'
import UserDetails from './assets/Pages/UserDetails'
import Quizzes from './assets/Pages/Quizzes'
import Quiz from './assets/Pages/Quiz'
import Result from './assets/Pages/Result'
import { useState } from 'react'

function App() {
  const [name, setName] = useState("guest")
  const [result, setResult] = useState({
    name: name,
    questions: []
  })
  return (
    <>
      <Routes>
        <Route path='/' element={<UserDetails setName={setName} />} />
        <Route path='/quizzes' element={<Quizzes name={name} />} />
        <Route path='/quiz' element={<Quiz name={name} result={result} setResult={setResult} />} />
        <Route path='/result' element={<Result name={name} result={result} />} />
      </Routes>
    </>
  )
}

export default App
