// import { useUpdateCharacterMutation } from "../api/janeAustenApi";
// import { useDeleteCharacterMutation } from "../api/janeAustenApi";
// import { useNavigate, useParams } from "react-router-dom";

// export default function NewCharacters() {
//   const navigate = useNavigate();
//   const { characterId } = useParams();

//   const [updateCharacter] = useUpdateCharacterMutation();
//   const [deleteCharacter] = useDeleteCharacterMutation();

//   async function updateNewCharacter(e) {
//     e.preventDefault();

//     await updateCharacter({ characterId });
//   }

//   async function deleteNewCharacter(e) {
//     e.preventDefault();

//     await deleteCharacter({ characterId });
//   }

//   return (
//     <div className="newCharacters">
//       <h1>Create Your Character</h1>
//       {error && <p>{error}</p>}

//       <form onSubmit={handleCreate}>
//         <label>
//           Name:
//           <input
//             value={name}
//             onChange={(event) => {
//               setName(event.target.value);
//             }}
//           />
//         </label>

//         <label>
//           Book:
//           <input
//             value={book}
//             onChange={(event) => {
//               setBook(event.target.value);
//             }}
//           />
//         </label>

//         <label>
//           Description:
//           <input
//             value={description}
//             onChange={(event) => {
//               setDescription(event.target.value);
//             }}
//           />
//         </label>

//         <label>
//           Quote:
//           <input
//             value={quote}
//             onChange={(event) => {
//               setQuote(event.target.value);
//             }}
//           />
//         </label>
//         {successMessage && <p>{successMessage}</p>}
//         <button type="submit">Create</button>
//       </form>
//     </div>
//   );
// }
