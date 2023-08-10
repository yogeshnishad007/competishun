

import { Routes, Route, Navigate } from 'react-router-dom'; 
import Home from './Home';
import Favorites from './Favorites';
import Watchlist from './WatchList';
import MovieDetails from "./MovieDetails"
import SignIn from './Signin';


const AllRoutes = (props) => {
  return (
    <Routes>
        <>
      <Route
        path="/"
        element={props.displayName ? <Home /> : <Navigate to="/signin" />}
      />
      {/* <Route path="/" element={<Home/>} /> */}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/watchlist" element={<Watchlist />} />
      <Route path="/movie/:id" element={<MovieDetails/>} />
        </>
     
    </Routes>
  );
};

export default AllRoutes;
