import { Link } from "react-router-dom"

const WatchList = () => {
  return (
    <div>
      
      <div className="nav-container">
        <h3>
          <Link to="/">Movies</Link>
        </h3>
        <h3>
          <Link to="/favorites">Favorites</Link>
        </h3>
        <h3>
          <Link to="/watchlist">Watchlist</Link>
          </h3>
        </div>
      

      <div>
            <h1>    WatchList</h1>
      </div>
       



    </div>
  )
}

export default WatchList