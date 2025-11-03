import Header from '@/components/Header'
import Logo from '@/components/Logo'
import { useQuiz } from '@/components/store'
import { Link } from 'react-router-dom'

const Score = ({ score }: { score: number }) => {
  const { isDark } = useQuiz()

  return (
    <>
      <Header />
      <main className="flex w-full flex-col gap-10 px-6 pt-8 text-pretty md:mt-12 md:w-160 md:gap-16 md:px-0 md:pt-0 lg:mb-40 lg:w-full lg:flex-row lg:gap-36">
        <h1 className="md:flex md:flex-col">
          Quiz completed<span> You scored...</span>
        </h1>
        <section className="flex flex-col items-center gap-4 md:gap-8 lg:w-lg">
          <div
            className={`flex w-full flex-col items-center rounded-[12px] p-8 md:rounded-3xl md:p-12 ${isDark ? 'bg-(--color-blue850)' : 'bg-white'}`}
          >
            <Logo />
            <span className="score mt-4 md:mt-10">{score}</span>
            <span
              className={`total mt-4 ${isDark && 'text-(--color-blue300)'}`}
            >
              Out of 10
            </span>
          </div>

          <Link
            onClick={() => {
              window.location.href = '/frontend-quiz-app/'
            }}
            className="submit rounded[12px] w-full cursor-pointer rounded-3xl p-4 text-center md:p-8"
            to="/frontend-quiz-app/"
          >
            Play Again
          </Link>
        </section>
      </main>
    </>
  )
}

export default Score
