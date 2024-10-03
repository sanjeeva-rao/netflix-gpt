import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Header = () => {
    const userName = useSelector((store)=>{
        if(store.user){
            return store.user.displayName
        }
        return;
    })
    const navigate = useNavigate();
    const signOutUser = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div className="bg-gradient-to-b from-black flex justify-between">
           <img className="h-[100px] w-[100px]" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
           <div className="flex justify-between">
                <p className="text-xl text-red-500 p-8">{userName}</p>
                <button onClick={signOutUser} className="bg-red-600 rounded h-12 px-4 mt-6 mr-4">Sign Out</button>
           </div>
        </div>
    )
}

export default Header;