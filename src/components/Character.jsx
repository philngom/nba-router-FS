import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function Character() {
  const [isLoading, setIsLoading] = useState(true);
  const [character, setCharacter] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const data = await response.json();
      setCharacter(data);
      setIsLoading(false);
    };
    fetchCharacter();
  }, []);

  return (
    <>
      <Link to="/">Back to character list</Link>
      {isLoading ? (
        <p>Loading character...</p>
      ) : (
        <div>
          <h3>{character.name}</h3>
          <img src={character.image} />
        </div>
      )}
    </>
  );
}
