import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div
      className="px-6"
      style={{
        overflowX: "auto",
        WebkitOverflowScrolling: "touch",
        scrollbarWidth: "none",
      }}
    >
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex">
        {movies?.map((movie) => (
          <div key={movie.id} className="mr-4">
            <MovieCard posterPath={movie.poster_path} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
