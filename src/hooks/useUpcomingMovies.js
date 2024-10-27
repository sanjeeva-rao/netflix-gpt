import { useEffect } from "react";
import { tmdb_options } from "../utils/constants";
import { addUpComingMovies } from "../redux/moviesSlice";
import { useDispatch } from "react-redux";


const useUpComingMovies = () => {
    const dispatch = useDispatch();
    const getUpcomingMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', tmdb_options);
        const json = await data.json();
        dispatch(addUpComingMovies(json.results))
    }

    useEffect(()=>{
        getUpcomingMovies();
    }, [])
}
export default useUpComingMovies;