import React from "react";
import { useGetBooksQuery } from "../api/janeAustenApi";

//React component for displaying books
const Books = () => {
  const { data = {}, error, isLoading } = useGetBooksQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(data);

  return (
    <div className="books">
      {data.map((book) => (
        <div key={book.bookId} className="book">
          <h2>{book.title}</h2>
          <p>{book.date}</p>
          <img className="bookimage" src={book.image} alt="Book" />
        </div>
      ))}
    </div>
  );
};

export default Books;
