import React from "react";
import { useGetCharactersQuery } from "../api/janeAustenApi";

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
          <p>{character.description}</p>
          <p>{character.quote}</p>
        </div>
      ))}
    </div>
  );
  }