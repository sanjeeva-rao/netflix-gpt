import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { logo } from "../utils/constants";

const Header = () => {
    const userName = useSelector((store)=>{
        if(store.user){
            return store.user.displayName
        }
        return;
    })
    const signOutUser = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div className="flex justify-between -mb-32 relative z-50">
           <img className="h-[100px] w-[100px]" src={logo} alt="logo"/>
           <div className="flex justify-between">
                <p className="text-xl text-red-500 p-8">{userName}</p>
                <button onClick={signOutUser} className="bg-red-600 rounded h-12 px-4 mt-6 mr-4">Sign Out</button>
           </div>
        </div>
    )
}

export default Header;