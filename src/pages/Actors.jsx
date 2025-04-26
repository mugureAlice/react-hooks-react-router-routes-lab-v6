import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';

function Actors() {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:4000/actors')
      .then(r => r.json())
      .then(data => {
        setActors(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  

  return (
    <>
      <NavBar />
      <h1>Actors Page</h1>
      {actors.map(actor => (
        <article key={actor.id}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </>
  );
}

export default Actors;