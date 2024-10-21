import Browser from "./Browser";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
    return (
        <div className="h-full">
            <RouterProvider router = {browserRouter}/>
        </div>
    )
}

export default Body;