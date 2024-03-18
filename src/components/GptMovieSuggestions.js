import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {movieNames.map((movieName, index) => {
          const movies = movieResults[index];

          if (movies && movies.length > 0) {
            return (
              <MovieList key={movieName} title={movieName} movies={movies} />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
