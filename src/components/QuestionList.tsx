// import { Progress } from './ui/progress'

// const QuestionList = () => {
//   const { id } = useParams()

//   const quizList = data.quizzes

//   const iconArray = ['A', 'B', 'C', 'D']

//   const quizArray = quizList.filter((val) => val.title === id)

//   const questionArray = quizArray[0].questions.map((quiz, idx) => {
//     return (
//       <main className="flex flex-col">
//         <section>
//           <h2>
//             Question {idx} of {questionArray.length}
//           </h2>
//           <Progress value={idx} max={questionArray.length} />
//         </section>
//         <form>
//           <ul className="flex flex-col gap-4">
//             {quiz.options.map((option, idx) => {
//               return (
//                 <li className="option flex items-center gap-4 p-4" key={idx}>
//                   <div className="image-container flex items-center justify-center bg-(--color-grey50)">
//                     <p className="text-{--color-grey500} question-order">
//                       {iconArray[idx]}
//                     </p>
//                   </div>
//                   <label
//                     htmlFor="option-radio"
//                     className="question leading-[120%]"
//                   >
//                     {option}
//                     <input name="option-radio" value={option} type="radio" />
//                   </label>
//                 </li>
//               )
//             })}
//           </ul>
//           <button className="submit p-4">Submit Answer</button>
//         </form>
//       </main>
//     )
//   })
// }

// export default QuestionList
