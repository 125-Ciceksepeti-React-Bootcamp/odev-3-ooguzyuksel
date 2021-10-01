import React, { useEffect, useState } from "react";
import "./App.css";
import Cards from "./Components/Cards/Cards";

function App() {
  const url =
    "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=sACXqMVk1uBksrYlMalibmxYh70pHqRQ";
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setBooks(...books, data.results.books));
  }, []);

  const deleteBook = (rank) => {
    const filteredBook = books.filter((book) => book.rank !== rank);
    setBooks(filteredBook);
  };

  return (
    <div className="App">
      <Cards books={books} deleteBook={deleteBook} />
    </div>
  );
}

export default App;
