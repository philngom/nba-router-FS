import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await fetch('https://rickandmortyapi.com/api/character');
      console.log(data);
    };
    fetchCharacters();
  }, []);

  return <div>Characters</div>;
}
