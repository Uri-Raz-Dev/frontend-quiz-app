import { Link } from 'react-router-dom'
import data from '../../data.json'
import html_icon from '../assets/images/icon-html.svg'
import css_icon from '../assets/images/icon-css.svg'
import js_icon from '../assets/images/icon-js.svg'
import accessibility_icon from '../assets/images/icon-accessibility.svg'

const Home = () => {
  const createList = () => {
    const quizList = data.quizzes
    const iconArray = [html_icon, css_icon, js_icon, accessibility_icon]
    const iconColorArray = [
      'bg-(--color-orange50)',
      'bg-(--color-green100)',
      'bg-(--color-blue50)',
      'bg-(--color-purple100)',
    ]
    const quizArray = quizList.map((val, idx) => {
      return (
        <li className="option flex items-center gap-4 p-4" key={val.title}>
          <div
            className={`image-container flex items-center justify-center ${iconColorArray[idx]}`}
          >
            <img src={iconArray[idx]} />
          </div>
          <Link to={`/frontend-quiz-app/quiz/${val.title}`}>{val.title}</Link>
        </li>
      )
    })
    return quizArray
  }
  return (
    <main className="flex flex-col gap-10 px-6 pt-8">
      <section className="flex flex-col gap-4">
        <h1 className="text-pretty">
          Welcome to the <span>Frontend Quiz!</span>
        </h1>
        <h2>Pick a subject to get started</h2>
      </section>
      <ul className="flex flex-col gap-4">{createList()}</ul>
    </main>
  )
}

export default Home
