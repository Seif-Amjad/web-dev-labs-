export default function MovieItem({ movie, removeMovie }) {
  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <p className="review">📝 {movie.review || "No review added"}</p>
      <p className="stars">
        {Array.from({ length: movie.rating }, () => "⭐").join("") || "No rating"}
      </p>
      <button className="delete" onClick={() => removeMovie(movie.id)}>
        Remove
      </button>
    </div>
  );
}
