import React, { useState, useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";

const BookForm = () => {
  const { dispatch } = useContext(BooksContext);
  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <div className="form-wrapper">
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          console.log(bookName, author);
          dispatch({ type: "ADD_BOOK", book: { title: bookName, author } });
          setAuthor("");
          setBookName("");
        }}>
        <input
          type="text"
          name="Book Name"
          required
          placeholder="eg. Learning C with Examples"
          value={bookName}
          onChange={(event) => setBookName(event.target.value)}
        />
        <input
          type="text"
          name="author"
          required
          value={author}
          placeholder="eg. Brandon Wolowtitz"
          onChange={(event) => setAuthor(event.target.value)}
        />
        <input type="submit" value="Add Book" />
      </form>
    </div>
  );
};

export default BookForm;
