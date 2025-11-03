import { useParams } from 'react-router-dom'
import Logo from './Logo'
import { Switch } from './ui/switch'
import sun_icon_dark from '../assets/images/icon-sun-dark.svg'
import moon_icon_dark from '../assets/images/icon-moon-dark.svg'
import sun_icon_light from '../assets/images/icon-sun-light.svg'
import moon_icon_light from '../assets/images/icon-moon-light.svg'
import { useQuiz } from './store'
const Header = () => {
  const { id } = useParams()
  const { isDark } = useQuiz()

  return (
    <header className="lg: mt-13.5 flex justify-between px-6 py-4 md:px-0 md:py-0 lg:mt-0 lg:mb-25">
      {id ? <Logo /> : <div></div>}
      <div className="flex items-center gap-2">
        <img
          className="size-4 md:size-6"
          src={isDark ? sun_icon_light : sun_icon_dark}
        />
        <Switch />
        <img
          className="size-4 md:size-6"
          src={isDark ? moon_icon_light : moon_icon_dark}
        />
      </div>
    </header>
  )
}

export default Header
