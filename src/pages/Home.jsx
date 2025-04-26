import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import NavBar from '../components/NavBar';

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:4000/movies')
      .then(r => r.json())
      .then(data => {
        setMovies(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

 

  return (
    <>
      <NavBar />
      <h1>Home Page</h1>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </>
  );
}

export default Home;