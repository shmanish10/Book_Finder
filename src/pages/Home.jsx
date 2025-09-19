import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";
import Loader from "../components/Loader";
import { searchBooks } from "../api/openLibrary";
import "../styles/App.css";

const Home = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (!query) return;
    const loadBooks = async () => {
      setLoading(true);
      const results = await searchBooks(query);
      setBooks(results);
      setLoading(false);
      setSearched(true);
    };
    loadBooks();
  }, [query]);

  return (
    <div className="home-container">
      <h1 className="title">📚 Book Finder</h1>
      <SearchBar onSearch={setQuery} />
      {loading && <Loader />}
      {!loading && searched && books.length === 0 && (
        <p className="no-results">No books found. Try another title.</p>
      )}
      {!loading && books.length > 0 && <BookList books={books} />}
    </div>
  );
};

export default Home;
