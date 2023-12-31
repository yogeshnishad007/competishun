import { useState } from "react";
import { auth, provider } from "../Auth/FirebaseConfig";
import { signInWithPopup } from "firebase/auth";
import AllRoutes from "./AllRoutes";
import "../Style/SignIn.css";

const SignIn = () => {
  const [value, setValue] = useState(null);

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setValue(user);

        localStorage.setItem("email", user.email);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
    setValue(null);
  };

  console.log("value", value);

  return (
    <div>
      {value ? (
        <>
    

     
            <div className="navigation">
              
              <a className="button" href="">
                <img src={value.photoURL} alt="dp" referrerPolicy="no-referrer" />
              
              <div className="logout" onClick={handleLogout}>LOGOUT</div>

              </a>
              
            </div>

          <div className="route">
            <AllRoutes displayName={value.displayName} />
          </div>
      
        </>
      ) : (
        <>
          <div className="sign-btn">
            <h1>Welcome to MoviX</h1>
            <button onClick={handleClick}>Signin With Google</button>
          </div>
        </>
      )}
    </div>
  );
};
export default SignIn;

