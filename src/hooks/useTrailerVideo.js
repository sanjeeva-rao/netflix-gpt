import { useEffect } from "react";
import { tmdb_options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../redux/moviesSlice";
const useTrailerVideo = (movie_id) => {
    const dispatch = useDispatch();
    const getPlayingVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movie_id+'/videos?language=en-US', tmdb_options);
        const json = await data.json();
        const trailerVideos = json.results.filter((video)=>video.type === "Trailer");
        const mainTrailer = trailerVideos.length ? trailerVideos[0] : json.results[0];
        dispatch(addTrailerVideo(mainTrailer))
        
    }

    useEffect(()=>{
        getPlayingVideos();
    }, [])
}

export default useTrailerVideo;