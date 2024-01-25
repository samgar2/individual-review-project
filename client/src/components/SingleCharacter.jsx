import React from "react";
import { useGetSingleCharacterQuery } from "../api/janeAustenApi";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDeleteCharacterMutation } from "../api/janeAustenApi";
import { useUpdateCharacterMutation } from "../api/janeAustenApi";

export default function SingleCharacter() {
  //update single character
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [book, setBook] = useState("");
  const [description, setDescription] = useState("");
  const [quote, setQuote] = useState("");

  const [updateCharacter] = useUpdateCharacterMutation();

  async function handleUpdate(e) {
    e.preventDefault();
    try {
      const result = await updateCharacter({
        characterId,
        image,
        name,
        book,
        description,
        quote,
      });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  
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

        <div className="updateCharacters">
        <form onSubmit={handleUpdate}>
          <h1>Update Your Character</h1>
          <p>Feel free to make updates or changes to your character.</p>
          <label>
            Image Url:
            <input
              value={image}
              onChange={(event) => {
                setImage(event.target.value);
              }}
            />
          </label>

          <label>
            Name:
            <input
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </label>

          <label>
            Book:
            <input
              value={book}
              onChange={(event) => {
                setBook(event.target.value);
              }}
            />
          </label>

          <label>
            Description:
            <input
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </label>

          <label>
            Quote:
            <input
              value={quote}
              onChange={(event) => {
                setQuote(event.target.value);
              }}
            />
          </label>
          <button type="submit">Update</button>
        </form>
      </div>
      </div>
    );
    }
