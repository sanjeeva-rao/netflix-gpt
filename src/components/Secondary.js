import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const Secondary = () => {
    const movies = useSelector((store)=>store.movies);
    
    return <div className="bg-black relative z-50">
        <div className="-mt-60">
            <MovieList title = "Now Playing Movies" movies = {movies.nowPlayingMovies}/>
            <MovieList title = "Popular Movies" movies = {movies.popularMovies}/>
            <MovieList title = "Top Rated Movies" movies = {movies.topRatedMovies}/>
            <MovieList title = "Upcoming Movies" movies = {movies.upComingMovies}/>
        </div>
    </div>
}

export default Secondary;