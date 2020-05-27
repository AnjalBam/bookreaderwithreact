import React, { useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";

const NavBar = () => {
  const { books } = useContext(BooksContext);
  return (
    <div className="wrapper">
      <div className="navbar-wrapper">
        <h1>Book Readers' List</h1>
        <h3>Read Books Expand your Mind!</h3>
        <h4>You have {books.length} books remaining.</h4>
      </div>
    </div>
  );
};

export default NavBar;
