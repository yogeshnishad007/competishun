import { useState } from "react";
import {auth,provider} from "../Auth/FirebaseConfig";
import {signInWithPopup} from "firebase/auth";

import"../Style/SignIn.css"

const SignIn =()=> {
    const [value,setValue] = useState(null)

    // const handleClick =()=>{
    //     signInWithPopup(auth,provider).then((data)=>{
    //         setValue(data.value)
    //         localStorage.setItem("email",data.value.email)
    //     })
    // }

    const handleClick=()=>{
        signInWithPopup(auth, provider).then((result)=>{
          const user = result.user;
          console.log(user);
          setValue(user);
          
          localStorage.setItem("email",user.email)

        }).catch((err)=>{
          console.log(err);
        })
      }
    const handleLogout =()=>{
        localStorage.clear()
        window.location.reload()
        setValue(null)
    }

    console.log("value",value)
    // useEffect(()=>{
    //     setValue(localStorage.getItem('email'))
    // },[])

return (
    <div>
        {value?(
            <>
            <div className="profile-container">
               
            <div className='profile-pic'>
                <img src={value.photoURL} alt="dp" referrerPolicy='no-referrer'/>
              </div>

              <h3>Welcome {value.displayName}</h3>

              <button className=''
                        onClick={handleLogout}>
                        LOGOUT
               </button>
            </div>
             
            </>
          ):(

            <button onClick={handleClick}>Signin With Google</button>
          )
        
        }
    </div>
);
}
export default SignIn



