import Header from "./Header";
import Top from "./Top";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"

const Browser = () => {
    useNowPlayingMovies();

    return <div>
        <Top/>
        <Header />
    </div>
}

export default Browser;