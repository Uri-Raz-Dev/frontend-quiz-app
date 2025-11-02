import Header from '@/components/Header'
import SubjectList from '@/components/SubjectList'

const Home = ({ page }: { page: number }) => {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-10 px-6 pt-8">
        <section className="flex flex-col gap-4">
          <h1 className="text-pretty">
            Welcome to the <span>Frontend Quiz!</span>
          </h1>
          <h2>Pick a subject to get started</h2>
        </section>
        <SubjectList page={page} />
      </main>
    </>
  )
}

export default Home
