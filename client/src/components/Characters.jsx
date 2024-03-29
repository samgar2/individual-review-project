import React from "react";
import { useGetCharactersQuery } from "../api/janeAustenApi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCreateCharacterMutation } from "../api/janeAustenApi";

export default function Characters() {
  //create a new character
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [book, setBook] = useState("");
  const [description, setDescription] = useState("");
  const [quote, setQuote] = useState("");

  const [createCharacter] = useCreateCharacterMutation();
  const { data = {}, error, isLoading } = useGetCharactersQuery();

  async function handleCreate(e) {
    e.preventDefault();
    try {
      const result = await createCharacter({
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

  // useGetCharactersQuery(); recall this in some way at the end of my create, update, and delete functionalities to automatically refresh the page
  
  //get all characters
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(data);

  return (
    <>
      <div className="allCharacters">
        {data.map((character) => (
          <div key={character.characterId} className="character">
            <img
              className="characterimage"
              src={character.image}
              alt="Character"
            />
            <h2>{character.name}</h2>
            <p>{character.book}</p>

            <button>
              <Link to={`/characters/${character.characterId}`}>
                See Details 
              </Link>
            </button>
          </div>
        ))}
      </div>

      <div className="newCharacters">
        <form onSubmit={handleCreate}>
          <h1>Create Your Own Character</h1>
          <p>Think about a character Jane Austen might have written today, a character that could have existed in one of her previous books, or feel free to make up your own! Pick out an image that represents your character and plop the link in the Image Url box down below.</p>
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
          <button type="submit">Create</button>
        </form>
      </div>
    </>
  );
}
