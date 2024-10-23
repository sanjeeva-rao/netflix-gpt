import { tmdb_options } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/moviesSlice";

const useNowPlayingMovies = () => {
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
}

export default useNowPlayingMovies;