import { useState } from "react";
import { useRef } from "react";
import { validation } from "../utils/validation";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import Top from "./Top";
import { logo } from "../utils/constants";
import { backgroundImg } from "../utils/constants";

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [waringValidation, setWarningValidation] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null)
    const dispatch = useDispatch();

    const ClickSignInSignUp = () => {
        const error = validation(email.current.value, password.current.value, isSignIn ? undefined : name.current.value);
        setWarningValidation(error);

        if(error) return;

        if(!isSignIn) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
              .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
                updateProfile(auth.currentUser, {
                    displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                  }).then(() => {
                    dispatch(addUser({email: auth.currentUser.email, displayName: auth.currentUser.displayName}))
                    // Profile updated!
                    // ...
                  }).catch((error) => {
                    // An error occurred
                    // ...
                  });
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                
                setWarningValidation(errorMessage);
                
              });
        }

        else{
            // SIGN IN
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setWarningValidation(errorMessage);
            });
        }
    }

    return <div className="min-w-full h-full">
        <Top/>
        <div className="z-40 absolute bg-gradient-to-b from-black w-full">
            <img className="mx-10 my-2 h-[150px] w-[150px]" src={logo} alt="logo"/>
        </div>
        <img className="absolute" src={backgroundImg} alt="back-ground" />
        <div className="bg-black w-4/12 relative mx-auto top-24 opacity-80">
            <form onSubmit={(e)=>e.preventDefault()} className="text-white " >
                <p className="my-4 font-bold text-2xl mx-8">{isSignIn ? "Sign In": "Sign Up"}</p>
                {
                    !isSignIn && <input ref={name} className="w-10/12 h-12 my-4 mx-8 border rounded p-4 text-black" type="name" placeholder="Enter Full Name"/>
                }
                <input ref={email} className="w-10/12 h-12 my-4 mx-8 border rounded p-4 text-black" type="name" placeholder="Email or mobile number"/>
                <input ref={password} className="w-10/12 h-12 my-4 mx-8 border rounded p-4 text-black" type="password" placeholder="Password" />
                <button className="bg-red-600 my-4 mx-8 w-10/12 h-12 rounded" onClick={ClickSignInSignUp}>{isSignIn ? "Sign In": "Sign Up"}</button>
                <p className="text-center text-lg text-red-600">{waringValidation}</p>
                <p className="text-center">OR</p>
                <p className="text-center py-4 cursor-pointer" onClick={()=>{setIsSignIn(!isSignIn)}}>{isSignIn ? "Don't have a ccount ? Sign Up": "Already have an account ? Sign In"}</p>
            </form>
        </div>
    </div>
}

export default Login;