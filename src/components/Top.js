import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const Top = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              dispatch(addUser({email: user.email, displayName: user.displayName}))
              navigate("/browser")
              // ...
            } else {
              // User is signed out
              // ...
              dispatch(removeUser());
              navigate("/")
            }
          });
          
          //When compoent unmounts
          return () => unsubscribe()
    }, [])
    return (
        <div>

        </div>
    )
}

export default Top;