import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Score from './pages/Score'
import { useState } from 'react'

function App() {
  const [page, setPage] = useState(0)
  const [score, setScore] = useState(0)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/frontend-quiz-app/" element={<Home page={page} />} />
        <Route
          path="/frontend-quiz-app/quiz/:id/:pageNum"
          element={
            <Quiz
              page={page}
              setPage={setPage}
              score={score}
              setScore={setScore}
            />
          }
        />
        <Route
          path="/frontend-quiz-app/score/:id"
          element={<Score score={score} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
