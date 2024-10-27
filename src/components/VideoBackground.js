import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";
const VideoBackground = ({movie_id}) => {
    const trialer = useSelector((store)=>store.movies?.trailerVideo);
    useTrailerVideo(movie_id)
    return <div>
        <iframe className="w-screen aspect-video"
            src={"https://www.youtube.com/embed/VUCNBAmse04?si="+trialer+"?&autoplay=1&mute=1"} 
            title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin">
        </iframe>
    </div>
}

export default VideoBackground;