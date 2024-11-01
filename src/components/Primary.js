import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
const Primary = () => {
    const movies = useSelector(store=>store.movies.nowPlayingMovies)
    if(!movies) return;

    const mainMovie = movies[0];
    const {original_title, overview, id} = mainMovie;
    
    return <div className="pt-6">
        <VideoTitle title={original_title} overview = {overview} />
        <VideoBackground movie_id={id}/>
    </div>
}

export default Primary;