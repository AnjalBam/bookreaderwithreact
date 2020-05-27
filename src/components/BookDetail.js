import React, { useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";

const BookDetail = ({ book }) => {
  console.log(book);
  const { dispatch } = useContext(BooksContext);
  return (
    <li
      className="list-detail"
      onClick={() =>
        dispatch({
          type: "REMOVE_BOOK",
          id: book.id,
        })
      }>
      <p>{book.title}</p>
      <span>{book.author}</span>
    </li>
  );
};

export default BookDetail;
