import {Link} from 'react-router-dom'

import {NavBar, NavContent, WebsiteLogo} from './styledComponents'

const Header = () => (
  <NavBar>
    <NavContent>
      <Link to="/">
        <WebsiteLogo
          src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
          alt="website logo"
        />
      </Link>
    </NavContent>
  </NavBar>
)

export default Header
