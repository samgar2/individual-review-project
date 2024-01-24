import React from "react";
import { useGetCharactersQuery } from "../api/janeAustenApi";
import { Link } from "react-router-dom";

export default function Characters() {
  const { data = {}, error, isLoading } = useGetCharactersQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(data);

  return (
    <div className="characters">
      {data.map((character) => (
        <div key={character.characterId} className="character">
          <img className="characterimage" src={character.image} alt="Character" />
          <h2>{character.name}</h2>
          <p>{character.bookId}</p>

          <button>
            <Link to={`/characters/${character.characterId}`}>See Details</Link>
          </button>

        </div>
      ))}
    </div>
  );
  }