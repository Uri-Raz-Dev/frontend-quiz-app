import { Link, useParams } from 'react-router-dom'
import html from '../assets/images/icon-html.svg'
import css from '../assets/images/icon-css.svg'
import javascript from '../assets/images/icon-js.svg'
import accessibility from '../assets/images/icon-accessibility.svg'

const Logo = () => {
  const { id } = useParams()
  console.log(id)
  let logo: string
  let color: string
  const handleSource = () => {
    switch (id) {
      case 'HTML':
        logo = html
        break
      case 'CSS':
        logo = css
        break
      case 'JavaScript':
        logo = javascript
        break
      case 'Accessibility':
        logo = accessibility
        break
    }
    return logo
  }
  const handleBgColor = () => {
    switch (id) {
      case 'HTML':
        color = 'bg-(--color-orange50)'
        break
      case 'CSS':
        color = 'bg-(--color-green100)'
        break
      case 'JavaScript':
        color = 'bg-(--color-blue50)'
        break
      case 'Accessibility':
        color = 'bg-(--color-purple100)'
        break
    }
    return color
  }
  return (
    <div className="flex items-center gap-4">
      <div
        className={`image-container flex items-center justify-center rounded-[6px] ${handleBgColor()}`}
      >
        <img src={handleSource()} alt={`${id} icon`} />
      </div>
      <Link className="subject" to="/frontend-quiz-app/">
        {id}
      </Link>
    </div>
  )
}

export default Logo
