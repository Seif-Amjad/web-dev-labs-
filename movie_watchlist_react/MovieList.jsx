import MovieItem from "./MovieItem";

export default function MovieList({ movies, removeMovie }) {
  if (movies.length === 0) {
    return <p className="empty">No movies added yet 🎥</p>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} removeMovie={removeMovie} />
      ))}
    </div>
  );
}
