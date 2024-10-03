import Browser from "./Browser";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
const browserRouter = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/browser",
        element: <Browser/>
    }
])

const Body = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              console.log(user, "user");
              dispatch(addUser({email: user.email, displayName: user.displayName}))
              // ...
            } else {
              // User is signed out
              // ...
              dispatch(removeUser());
            }
          });
    }, [])
    return (
        <div className="h-full">
            <RouterProvider router = {browserRouter}/>
        </div>
    )
}

export default Body;