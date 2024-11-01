import { useEffect } from "react";
import { tmdb_options } from "../utils/constants";
import { addPopularMovies } from "../redux/moviesSlice";
import { useDispatch } from "react-redux";


const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getPopularMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', tmdb_options);
        const json = await data.json();
        dispatch(addPopularMovies(json.results))
    }

    useEffect(()=>{
        getPopularMovies();
    }, [])
}
export default usePopularMovies;