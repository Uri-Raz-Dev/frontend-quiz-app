import { useParams } from 'react-router-dom'
import Logo from './Logo'
import { Switch } from './ui/switch'
import sun_icon_dark from '../assets/images/icon-sun-dark.svg'
import moon_icon_dark from '../assets/images/icon-moon-dark.svg'
const Header = () => {
  const { id } = useParams()
  return (
    <header className="flex justify-between px-6 py-4">
      {id ? <Logo /> : <div></div>}
      <div className="flex items-center gap-2">
        <img className="size-4" src={sun_icon_dark} />
        <Switch />
        <img className="size-4" src={moon_icon_dark} />
      </div>
    </header>
  )
}

export default Header
