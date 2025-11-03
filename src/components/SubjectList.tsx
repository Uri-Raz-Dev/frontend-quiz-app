import { Link } from 'react-router-dom'
import data from '../../data.json'
import html_icon from '../assets/images/icon-html.svg'
import css_icon from '../assets/images/icon-css.svg'
import js_icon from '../assets/images/icon-js.svg'
import accessibility_icon from '../assets/images/icon-accessibility.svg'
import { useQuiz } from './store'

const SubjectList = ({ page }: { page: number }) => {
  const { isDark } = useQuiz()

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
        <Link
          to={`/frontend-quiz-app/quiz/${val.title}/${page}`}
          className={`option flex items-center gap-4 p-4 md:max-w-160 md:rounded-3xl lg:max-w-141 lg:p-6 ${isDark && 'bg-(--color-blue850)'} `}
          key={val.title}
        >
          <div
            className={`image-container flex items-center justify-center rounded-xl ${iconColorArray[idx]}`}
          >
            <img src={iconArray[idx]} />
          </div>
          <div>{val.title}</div>
        </Link>
      )
    })
    return quizArray
  }

  return (
    <ul className="flex w-full flex-col gap-4 md:items-center md:gap-6 lg:gap-4">
      {createList()}
    </ul>
  )
}

export default SubjectList
