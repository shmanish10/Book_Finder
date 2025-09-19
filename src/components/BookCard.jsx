export default function BookCard({ book }) {
  const coverId = book.cover_i;
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : 'https://via.placeholder.com/150x200?text=No+Cover';

  return (
    <article className="book-card" role="listitem" aria-label={book.title}>
      <img src={coverUrl} alt={`Cover of ${book.title}`} />
      <h3>{book.title}</h3>
      <p>{book.author_name?.join(', ') || 'Unknown Author'}</p>
      <p>Published: {book.first_publish_year || 'N/A'}</p>
      <a
        href={`https://openlibrary.org${book.key}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${book.title} on Open Library`}
      >
        View Book
      </a>
    </article>
  );
}