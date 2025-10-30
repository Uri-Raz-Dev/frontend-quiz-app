import Header from '@/components/Header'
import { Link } from 'react-router-dom'

const Score = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-10 px-6 pt-8">
        <h1>
          Quiz completed<span> You scored...</span>
        </h1>
        <section className="flex flex-col items-center gap-4">
          <div className="flex w-full flex-col items-center gap-4 rounded-[12px] bg-white p-8">
            <p>Subject</p>
            <span className="score">8</span>
            <span className="total">Out of 10</span>
          </div>

          <Link
            className="submit rounded[12px] w-full cursor-pointer p-4 text-center"
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
