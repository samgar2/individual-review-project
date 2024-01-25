import React from "react";
import { useGetSingleCharacterQuery } from "../api/janeAustenApi";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDeleteCharacterMutation } from "../api/janeAustenApi";
import { useUpdateCharacterMutation } from "../api/janeAustenApi";

export default function SingleCharacter() {
  //update single character
  const [updateCharacter] = useUpdateCharacterMutation();
  
  //delete single character
  const [deleteCharacter] = useDeleteCharacterMutation()

  //get single character
  const { characterId } = useParams()
    const { data = {}, error, isLoading } = useGetSingleCharacterQuery(characterId);
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    console.log(data);
  
    return (
      <div>
        <div key={data.characterId} className="character">
          <img className="characterimage" src={data.image} alt="Character" />
          <h2>{data.name}</h2>
          <p>{data.book}</p>
          <p>{data.description}</p>
          <p>{data.quote}</p>
          <button><Link to="/characters">Back To All Characters</Link></button>
          <button onClick={() => deleteCharacter(data.characterId) }>Delete Character</button>
        </div>
      </div>
    );
    }
