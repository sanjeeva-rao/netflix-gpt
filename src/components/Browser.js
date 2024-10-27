import Header from "./Header";
import Top from "./Top";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies.js";
import Primary from "./Primary";
import Secondary from "./Secondary";
import useTopRatedMovies from "../hooks/useTopRatedMovies.js";
import useUpComingMovies from "../hooks/useUpcomingMovies.js";

const Browser = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpComingMovies();

    return <div>
        <Top/>
        <Header/>
        <Primary/>
        <Secondary/>
    </div>
}

export default Browser;