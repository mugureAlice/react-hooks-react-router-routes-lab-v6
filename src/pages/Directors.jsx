import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';

function Directors() {
  const [directors, setDirectors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:4000/directors')
      .then(r => r.json())
      .then(data => {
        setDirectors(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  

  return (
    <>
      <NavBar />
      <h1>Directors Page</h1>
      {directors.map(director => (
        <article key={director.id}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
}

export default Directors;