import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await fetch('https://rickandmortyapi.com/api/character');
      const { results } = await data.json();
      setCharacters(results);
      setIsLoading(false);
    };
    fetchCharacters();
  }, []);

  return (
    <>
      <h1>Rick and Morty Characters</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        characters.map((character) => {
          return (
            <div key={character.id}>
              <Link to={`/character/${character.id}`}>
                <li>{character.name}</li>
              </Link>
            </div>
          );
        })
      )}
    </>
  );
}
