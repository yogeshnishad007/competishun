
import { Link } from "react-router-dom"
import "../Style/Nav.css"
const NavBar = () => {
  return (
    <div>

<div className="nav-container">
                <h3>
                <Link className='link' to="/">Movies</Link>
                </h3>
                <h3>
                <Link  className='link'to="/favorites">Favorites</Link>
                </h3>
                <h3>
                <Link className='link' to="/watchlist">Watchlist</Link>
                </h3>
            </div>
    </div>
  )
}

export default NavBar