import { Progress } from '@/components/ui/progress'
import { useParams } from 'react-router-dom'
import data from '../../data.json'
// const { id } = useParams()

const Quiz = () => {
  const { id } = useParams()

  const quizList = data.quizzes

  const iconArray = ['A', 'B', 'C', 'D']

  const quizArray = quizList.filter((val) => val.title === id)

  const questionArray = quizArray[0].questions.map((quiz, idx) => {
    return (
      <main key={idx} className="flex flex-col gap-10 px-6 pt-8">
        <section>
          <h2 className="mb-4">Question {idx + 1} of 10</h2>
          <p className="question mb-6 leading-[120%]">{quiz.question}</p>
          <Progress value={(idx + 1) * 10} />
        </section>
        <form className="flex flex-col gap-4">
          <ul className="flex flex-col gap-4">
            {quiz.options.map((option, idx) => {
              return (
                <li
                  className="option flex items-center gap-4 p-4 has-checked:border-[3px] has-checked:border-(--color-purple600)"
                  key={idx}
                >
                  <input
                    id={`option-${idx}`}
                    className="peer absolute opacity-0"
                    name="option-radio"
                    value={option}
                    type="radio"
                  />
                  <div className="image-container group flex items-center justify-center rounded-[6px] bg-(--color-grey50) text-(--color-grey500) peer-checked:bg-(--color-purple600) peer-checked:text-white">
                    <p className="question-order group-has-bg-(--color-purple600):text-white flex items-center justify-center">
                      {iconArray[idx]}
                    </p>
                  </div>
                  <label htmlFor={`option-${idx}`}>{option}</label>
                </li>
              )
            })}
          </ul>
          <button className="submit p-4">Submit Answer</button>
        </form>
      </main>
    )
  })
  return <>{questionArray.slice(0, 1)}</>
}

export default Quiz
