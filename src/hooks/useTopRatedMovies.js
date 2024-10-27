import { useEffect } from "react";
import { tmdb_options } from "../utils/constants";
import { addTopRatedMovies } from "../redux/moviesSlice";
import { useDispatch } from "react-redux";


const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const getTopRatedMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', tmdb_options);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results))
    }

    useEffect(()=>{
        getTopRatedMovies();
    }, [])
}
export default useTopRatedMovies;