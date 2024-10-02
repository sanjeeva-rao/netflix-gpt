import { useState } from "react";
import { useRef } from "react";
import { validation } from "../utils/validation";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [waringValidation, setWarningValidation] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null)

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
        <div className="h-[200px] w-[200px] bg-gradient-to-b from-black z-40 absolute">
            <img className="mx-20 my-4" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
        </div>
        <img className="absolute" src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_small.jpg" alt="back-ground" />
        <div className="bg-black w-4/12 relative top-40 mx-auto opacity-80">
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