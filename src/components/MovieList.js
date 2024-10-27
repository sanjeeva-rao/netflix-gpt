import MovieCard from "./MovieCard"

const MovieList = (props) => {
    const {title, movies} = props;
    if(!movies) return;
    return <div>
        <div className="px-12 py-6">
            <h1 className="text-2xl text-white">{title}</h1>
            <div className="flex py-4 overflow-x-scroll overflow-y-hidden scrollbar">
                <div className="flex">
                    {
                        movies.map((movie) => <MovieCard id = {movie.id} movie = {movie}/>)
                    }
                </div>
            </div>
        </div>
    </div>
}

export default MovieList