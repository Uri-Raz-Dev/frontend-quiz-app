import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Score from './pages/Score'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/frontend-quiz-app/" element={<Home />} />
        <Route path="/frontend-quiz-app/quiz/:id" element={<Quiz />} />
        <Route path="/frontend-quiz-app/score/:id" element={<Score />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
