export const searchBooks = async (query) => {
  try {
    const response = await fetch(`https://openlibrary.org/search.json?title=${query}`);
    if (!response.ok) throw new Error('Network error');
    const data = await response.json();
    return data.docs;
  // eslint-disable-next-line no-unused-vars
  } catch (error) {
    throw new Error('Failed to fetch books. Please try again later.');
  }
};