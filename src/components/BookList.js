import React, { useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";
import BookDetail from "./BookDetail";

const BookList = () => {
  const { books } = useContext(BooksContext);
  return (
    <div className="list-wrapper">
      {books.length ? (
        <ul>
          {books.map((book) => (
            <BookDetail key={book.id} book={book} />
          ))}
        </ul>
      ) : (
        <div className="no-books">No books to read! Yay!!</div>
      )}
    </div>
  );
};

export default BookList;
