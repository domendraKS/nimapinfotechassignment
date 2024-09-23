import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="text-blue-400 mt-2 block w-full">
      <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg shadow-lg p-1 m-2 bg-gray-800 h-[350px] xl:h-[410px]">
        <img
          className="w-full h-64 xl:h-80 object-cover rounded"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="mt-4 h-[80px] text-center">
          <h3 className="text-white text-lg font-bold truncate">
            {movie.title}
          </h3>
          <p className="text-gray-400">
            Rating: {movie.vote_average.toFixed(1)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
