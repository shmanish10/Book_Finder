import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <form aria-label="Book search form">
      <label htmlFor="search" className="visually-hidden"></label>
      <input
        id="search"
        type="text"
        placeholder="Search books by title..."
        value={value}
        onChange={handleChange}
        aria-describedby="search-help"
      />
      <p id="search-help" className="help-text">
        Type to search for books. Results update automatically.
      </p>
    </form>
  );
}