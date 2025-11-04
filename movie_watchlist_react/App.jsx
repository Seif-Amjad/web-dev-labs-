import { useState } from "react";
import MovieList from "./MovieList";
import "./App.css";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const addMovie = () => {
    if (!title.trim()) return;
    const newMovie = {
      id: Date.now(),
      title,
      review,
      rating,
    };
    setMovies([...movies, newMovie]);
    setTitle("");
    setReview("");
    setRating(0);
  };

  const removeMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <div className="app-container">
      <h1>🎬 Movie Watch List</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Movie title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Write a short review..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <div className="rating">
          {[1, 2, 3, 4, 5].map((num) => (
            <span
              key={num}
              onClick={() => setRating(num)}
              className={num <= rating ? "star selected" : "star"}
            >
              ⭐
            </span>
          ))}
        </div>
        <button onClick={addMovie}>Add Movie</button>
      </div>

      <MovieList movies={movies} removeMovie={removeMovie} />
    </div>
  );
}
