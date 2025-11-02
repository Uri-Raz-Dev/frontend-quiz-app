import { Progress } from '@/components/ui/progress'
import { useNavigate, useParams } from 'react-router-dom'
import data from '../../data.json'
import Header from '@/components/Header'
import { useEffect, useState } from 'react'
import error from '../assets/images/icon-error.svg'
import incorrect from '../assets/images/icon-incorrect.svg'
import correct from '../assets/images/icon-correct.svg'

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

  const handleReset = () => {
    setPage(0)
    setIsCorrect(null)
    setProgress(10)
    setScore(0)
    navigate('/frontend-quiz-app/')
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
      <div key={idx}>
        <Header />
        <main className="flex flex-col gap-10 px-6 pt-8">
          <section>
            <h2 className="mb-4">Question {page + 1} of 10</h2>
            <p className="question mb-6 leading-[120%]">{quiz.question}</p>
            <Progress value={progress} />
          </section>
          <form
            id="quiz-form"
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <ul className="flex flex-col gap-4">
              {quiz.options.map((option, idx) => {
                const isSelected = selectedOption === option
                const isCorrectAnswer = option === quiz.answer

                return (
                  <li
                    onClick={() => {
                      if (answer !== null) return // Prevent selection after answer is submitted
                      setSelectedOption(option)
                      setIsChecked(true)
                      if (option === quiz.answer) {
                        setIsCorrect(true)
                      } else {
                        setIsCorrect(false)
                      }
                    }}
                    className={`option flex items-center gap-4 p-4 has-checked:border-[3px] ${answer === null && 'has-checked:border-(--color-purple600)'} ${answer === false ? 'has-checked:border-(--color-red500)' : 'has-checked:border-(--color-green500)'}`}
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
                    <label className="flex-1" htmlFor={`option-${idx}`}>
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
            <button className="submit p-4">Submit Answer</button>
            {isChecked === false && (
              <div className="flex items-center justify-center gap-2">
                <img className="error-icon" src={error} alt="error icon" />
                <span className="error text-(--color-red500)">
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
