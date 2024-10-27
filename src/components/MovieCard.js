import { movie_image_url } from "../utils/constants";
const MovieCard = (props) => {
    console.log(props);
    
    return <div className="h-[200px] w-[200px] pr-4">
        <img alt="poster" src = {movie_image_url + props.movie.poster_path} />
    </div>
}

export default MovieCard;