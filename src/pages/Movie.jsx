import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then(r => r.json())
      .then(data => {
        setMovie(data);
        setLoading(false);
      })
      .catch(console.error);
  }, [id]);

  if (loading) return <><NavBar /><h1>Loading...</h1></>;
  if (!movie) return <><NavBar /><h1>Movie not found</h1></>;

  return (
    <>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>Time: {movie.time}</p>
      <div>
        {movie.genres.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))}
      </div>
    </>
  );
}

export default Movie;