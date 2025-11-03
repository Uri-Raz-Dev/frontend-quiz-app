import { Progress } from '@/components/ui/progress'
import { useNavigate, useParams } from 'react-router-dom'
import data from '../../data.json'
import Header from '@/components/Header'
import { useEffect, useState } from 'react'
import error from '../assets/images/icon-error.svg'
import incorrect from '../assets/images/icon-incorrect.svg'
import correct from '../assets/images/icon-correct.svg'
import { useQuiz } from '@/components/store'

type Checked = null | true | false

const Quiz = ({
  score,
  setScore,
  page,
  setPage,
}: {
  score: number
  setScore: React.Dispatch<React.SetStateAction<number>>
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}) => {
  const { id, pageNum } = useParams()
  const [isCorrect, setIsCorrect] = useState<Checked>(null)
  const [answer, setAnswer] = useState<Checked>(null)
  const [isChecked, setIsChecked] = useState<Checked>(null)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [progress, setProgress] = useState(10)
  const navigate = useNavigate()
  const { isDark } = useQuiz()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!isChecked) {
      setIsChecked(false)
      return
    }
    if (isCorrect === true) {
      setAnswer(true)
      setScore(score + 1)
    } else if (isCorrect === false) {
      setAnswer(false)
    }
    setTimeout(submitActions, 1000)
  }

  const submitActions = () => {
    const nextPage = page + 1
    setPage(nextPage)
    setProgress(progress + 10)
    setIsChecked(null)
    setIsCorrect(null)
    setAnswer(null)
    setSelectedOption(null)
    if (nextPage > 9) {
      navigate(`/frontend-quiz-app/score/${id}`)
    } else {
      navigate(`/frontend-quiz-app/quiz/${id}/${nextPage}`)
    }
  }

  useEffect(() => {
    if (pageNum && parseInt(pageNum) !== page) {
      setPage(parseInt(pageNum))
    }
  }, [pageNum, setPage, page])

  const quizList = data.quizzes
  const iconArray = ['A', 'B', 'C', 'D']
  const quizArray = quizList.filter((val) => val.title === id)

  const questionArray = quizArray[0].questions.map((quiz, idx) => {
    return (
      <div className="w-full" key={idx}>
        <Header />
        <main className="flex flex-col gap-10 px-6 pt-8 text-pretty md:mt-8.25 md:w-160 md:px-0 md:pt-0 lg:mb-20 lg:w-full lg:flex-row lg:gap-32">
          <section className="lg:max-w-116.25">
            <h2
              className={`mb-4 md:leading-[150%] lg:mb-6 ${isDark && 'text-(--color-blue300)'}`}
            >
              Question {page + 1} of 10
            </h2>
            <p className="question mb-6 leading-[120%] text-wrap md:mb-10 lg:mb-46">
              {quiz.question}
            </p>
            <Progress value={progress} />
          </section>
          <form
            id="quiz-form"
            onSubmit={handleSubmit}
            className="flex w-auto flex-col gap-4 md:gap-8 lg:min-w-140"
          >
            <ul className="flex cursor-pointer flex-col gap-4 md:gap-6 lg:gap-4">
              {quiz.options.map((option, idx) => {
                const isSelected = selectedOption === option
                const isCorrectAnswer = option === quiz.answer

                return (
                  <li
                    onClick={() => {
                      if (answer !== null) return
                      setSelectedOption(option)
                      setIsChecked(true)
                      if (option === quiz.answer) {
                        setIsCorrect(true)
                      } else {
                        setIsCorrect(false)
                      }
                    }}
                    className={`option flex ${isDark && 'bg-(--color-blue850)'} cursor-pointer items-center gap-4 border-transparent p-4 text-pretty hover:border-[3px] hover:border-(--color-purple600) has-checked:border-[3px] md:gap-8 md:rounded-3xl lg:p-6 ${answer === null && 'has-checked:border-(--color-purple600)'} ${answer === false ? 'has-checked:border-(--color-red500)' : 'has-checked:border-(--color-green500)'} lg:max-w-141`}
                    key={idx}
                  >
                    <input
                      id={`option-${idx}`}
                      className="peer absolute opacity-0"
                      name="option-radio"
                      value={option}
                      type="radio"
                      checked={isSelected}
                      readOnly
                    />
                    <div
                      className={`image-container group flex items-center justify-center rounded-[6px] bg-(--color-grey50) text-(--color-grey500) peer-checked:text-white ${answer === null && isSelected && 'peer-checked:bg-(--color-purple600)'} ${answer !== null && isSelected && !isCorrectAnswer && 'peer-checked:bg-(--color-red500)'} ${answer !== null && isCorrectAnswer && 'peer-checked:bg-(--color-green500)'} ${answer !== null && isSelected && isCorrectAnswer && 'peer-checked:bg-(--color-green500)'}`}
                    >
                      <p className="question-order flex items-center justify-center">
                        {iconArray[idx]}
                      </p>
                    </div>
                    <label
                      className="flex-1 cursor-pointer"
                      htmlFor={`option-${idx}`}
                    >
                      {option}
                    </label>

                    {answer !== null && (
                      <>
                        {isCorrectAnswer && (
                          <img
                            className="answer-icon"
                            src={correct}
                            alt="correct answer icon"
                          />
                        )}
                        {isSelected && !isCorrectAnswer && (
                          <img
                            className="answer-icon"
                            src={incorrect}
                            alt="incorrect answer icon"
                          />
                        )}
                      </>
                    )}
                  </li>
                )
              })}
            </ul>
            <button
              className={`submit w-full cursor-pointer p-4 md:rounded-3xl md:p-8 ${!isChecked && 'lg:opacity-50'} ${!isChecked && isDark && 'lg:bg-(--purple-tint) lg:opacity-100'} `}
            >
              Submit Answer
            </button>
            {isChecked === false && (
              <div className="flex items-center justify-center gap-2">
                <img className="error-icon" src={error} alt="error icon" />
                <span className="error text-(--color-red500) md:font-normal">
                  Please select an answer
                </span>
              </div>
            )}
          </form>
        </main>
      </div>
    )
  })

  return <>{questionArray.slice(page, page + 1)}</>
}

export default Quiz
