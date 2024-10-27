import Header from "./Header";
import Top from "./Top";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Primary from "./Primary";
import Secondary from "./Secondary";

const Browser = () => {
    useNowPlayingMovies();

    return <div>
        <Top/>
        <Header/>
        <Primary/>
        <Secondary/>
    </div>
}

export default Browser;