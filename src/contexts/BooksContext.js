import React, { useReducer, createContext, useEffect } from "react";
import { BookReducer } from "../reducers/BookReducer";

export const BooksContext = createContext();

const BooksContextProvider = (props) => {
  const [books, dispatch] = useReducer(BookReducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <BooksContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;
