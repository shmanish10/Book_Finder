import BookCard from './BookCard';

export default function BookList({ books }) {
  if (!books.length) {
    return <p role="status">No books found. Try another search.</p>;
  }

  return (
    <section className="book-list" role="list" aria-live="polite">
      {books.map((book) => (
        <BookCard key={book.key} book={book} />
      ))}
    </section>
  );
}