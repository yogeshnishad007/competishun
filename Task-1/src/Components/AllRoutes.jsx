

import { Routes, Route, Navigate } from 'react-router-dom'; 
import Home from './Home';
import Favorites from './Favorites';
import Watchlist from './WatchList';
import SignIn from './Signin';


const AllRoutes = (props) => {
  return (
    <Routes>
        <>
      <Route
        path="/"
        element={props.displayName ? <Home /> : <Navigate to="/signin" />}
      />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/watchlist" element={<Watchlist />} />
        </>
     
    </Routes>
  );
};

export default AllRoutes;
