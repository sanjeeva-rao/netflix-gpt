import { useState } from "react";
const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    return <div className="min-w-full h-full">
        <div className="h-[200px] w-[200px] bg-gradient-to-b from-black z-40 absolute">
            <img className="mx-20 my-4" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
        </div>
        <img className="absolute" src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_small.jpg" alt="back-ground" />
        <div className="bg-black w-4/12 relative top-40 mx-auto opacity-80">
            <form className="text-white " >
                <p className="my-4 font-bold text-2xl mx-8">{isSignIn ? "Sign In": "Sign Up"}</p>
                {
                    !isSignIn && <input className="w-10/12 h-12 my-4 mx-8 border rounded p-4" type="name" placeholder="Enter Full Name"/>
                }
                <input className="w-10/12 h-12 my-4 mx-8 border rounded p-4" type="name" placeholder="Email or mobile number"/>
                <input className="w-10/12 h-12 my-4 mx-8 border rounded p-4" type="password" placeholder="Password" />
                <button className="bg-red-600 my-4 mx-8 w-10/12 h-12 rounded">{isSignIn ? "Sign In": "Sign Up"}</button>
                <p className="text-center">OR</p>
                <p className="text-center py-4 cursor-pointer" onClick={()=>{setIsSignIn(!isSignIn)}}>{isSignIn ? "Don't have a ccount ? Sign Up": "Already have an account ? Sign In"}</p>
            </form>
        </div>
    </div>
}

export default Login;