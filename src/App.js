import React from "react";
import BooksContextProvider from "./contexts/BooksContext";
import NavBar from "./components/NavBar";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";

function App() {
  return (
    <div>
      <BooksContextProvider>
        <NavBar />
        <BookList />
        <BookForm />
      </BooksContextProvider>
    </div>
  );
}

export default App;
