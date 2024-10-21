import Header from "./Header";
import Top from "./Top";
import { tmdb_options } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/moviesSlice";

const Browser = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', tmdb_options);
        const json = await data.json();
        console.log(json.results, "json");
        dispatch(addNowPlayingMovies(json.results));
    }

    useEffect(()=>{
        getNowPlayingMovies();
    }, [])

    return <div>
        <Top/>
        <Header />
    </div>
}

export default Browser;