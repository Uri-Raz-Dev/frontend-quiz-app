import Header from '@/components/Header'
import SubjectList from '@/components/SubjectList'

const Home = ({ page }: { page: number }) => {
  return (
    <>
      <Header />
      <main className="lg:w-full.25 flex flex-col items-center gap-10 px-6 pt-8 md:w-160 md:gap-16 md:px-0 md:pt-0 lg:mb-50 lg:w-full lg:max-w-289.25 lg:flex-row">
        <section className="flex flex-col gap-4 lg:gap-12 lg:self-start">
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
