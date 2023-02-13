import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('http://localhost:5000/books');
    const data = await response.json();
		console.log(data);
    setBooks(data.data.books);
  };

  const deleteBook = async (id) => {
    await fetch(`http://localhost:5000/books/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    fetchData();
  };

  return (
    <div>
      <Link to="/add" className="button is-primary mt-5">
        Add New
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>id</th>
            <th>Title</th>
            <th>Year</th>
            <th>Author</th>
						<th>Publisher</th>
						<th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{ book.id }</td>
              <td>{ book.name }</td>
              <td>{ book.year }</td>
							<td>{ book.author }</td>
							<td>{ book.publisher }</td>
              <td>
                <Link
                  to={`/edit/${book.id}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteBook(book.id)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
