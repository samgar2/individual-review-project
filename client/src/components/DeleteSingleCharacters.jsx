import { useDeleteCharacterMutation } from "../api/janeAustenApi";
import { useNavigate, useParams } from "react-router-dom";

export default function NewCharacters() {
  const navigate = useNavigate();
  const { characterId } = useParams();
  const [deleteCharacter] = useDeleteCharacterMutation()

  function DeleteCharacters() {
    return (
      <>
        <div className="character-container">
          {data.map((character) => {
            return (
              <div key={character.characterId} className="character-card">
                <img className="characterimage" src={data.image} alt="Character"/>
                <h2>{data.name}</h2>
                <p>{data.bookId}</p>
                <p>{data.description}</p>
                <p>{data.quote}</p>
                <button onClick={(event) => {
                    event.preventDefault();
                    clickDelete(character.characterId)
                }}>Delete</button>
              </div>
            );
          })}
        </div>
      </>
    );
  }

  async function clickDelete(characterId) {
    await deleteCharacter({ characterId });
  }

  return (
    <div className="delete">
        <button onClick={() => navigate("/characters")}>Back to All Characters</button>
        </div>
      )}


