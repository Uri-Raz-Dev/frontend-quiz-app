import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Score from './pages/Score'
import { Switch } from './components/ui/switch'
import sun_icon_dark from './assets/images/icon-sun-dark.svg'
import moon_icon_dark from './assets/images/icon-moon-dark.svg'
function App() {
  return (
    <BrowserRouter>
      <div className="flex justify-between px-6 py-4">
        <div></div>
        <div className="flex items-center gap-2">
          <img className="size-4" src={sun_icon_dark} />

          <Switch />
          <img className="size-4" src={moon_icon_dark} />
        </div>
      </div>
      <Routes>
        <Route path="/frontend-quiz-app/" element={<Home />} />
        <Route path="/frontend-quiz-app/quiz/*" element={<Quiz />} />
        <Route path="/frontend-quiz-app/score" element={<Score />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
