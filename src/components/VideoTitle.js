const VideoTitle = ({title, overview}) => {
    
    return <div className=" text-white w-screen aspect-video bg-gradient-to-r from-black absolute">
        <div className="px-12 pt-[10%]">
            <h1 className="text-4xl">{title}</h1>
            <p className="w-1/4 text-lg my-2">{overview}</p>
            <button className="bg-white text-black px-6 py-2 rounded hover:bg-opacity-70">▶️ Play</button>
            <utton className="bg-gray-500 text-white px-6 py-2.5 rounded mx-1 bg-opacity-50 hover:bg-opacity-70">More Info</utton>
        </div>
        
        
    </div>
}

export default VideoTitle;