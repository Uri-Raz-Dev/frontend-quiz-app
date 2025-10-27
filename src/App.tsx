import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Score from './pages/Score'
import { Switch } from './components/ui/switch'

function App() {
  return (
    <BrowserRouter>
      <Switch />
      <Routes>
        <Route path="/frontend-quiz-app/" element={<Home />} />
        <Route path="/frontend-quiz-app/quiz" element={<Quiz />} />
        <Route path="/frontend-quiz-app/score" element={<Score />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
