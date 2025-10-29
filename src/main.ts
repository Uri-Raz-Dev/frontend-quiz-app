import data from '../data.json'

const arr = data.quizzes.filter((val, index) => {
  return val.title === 'HTML'
})
console.log(arr[0].questions[0])
