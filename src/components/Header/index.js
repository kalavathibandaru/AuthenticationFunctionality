// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <ul className="list-elements">
      <Link to="/">
        <li className="list-item">Home</li>
      </Link>
      <Link to="/about">
        <li className="list-item">About</li>
      </Link>
    </ul>
  </nav>
)

export default Header
