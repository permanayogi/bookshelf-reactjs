/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AddBook = () => {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [author, setAuthor] = useState('');
  const [summary, setSummary] = useState('');
  const [publisher, setPublisher] = useState('');
  const [pageCount, setPageCount] = useState('');
  const [readPage, setReadPage] = useState('');
  const [reading, setReading] = useState('');
  const history = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getBookById = async () => {
      const response = await fetch(`http://localhost:5000/books/${id}`);
      const data = await response.json();
      setName(data.data.book.name);
      setYear(data.data.book.year);
      setAuthor(data.data.book.author);
      setSummary(data.data.book.summary);
      setPublisher(data.data.book.publisher);
      setPageCount(data.data.book.pageCount);
      setReadPage(data.data.book.readPage);
      setReading(data.data.book.reading);
    };
    getBookById().catch(console.error);
  }, []);

  const updateBook = async (e) => {
    e.preventDefault();
    const book = {
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
    };
    await fetch(`http://localhost:5000/books/${id}`, {
      method: 'PUT',
      body: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    history('/');
  };

  return (
    <div>
      <form onSubmit={updateBook}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Book Name"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Year</label>
          <div className="control">
            <input
              className="input"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              type="text"
              placeholder="Book Year"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Author</label>
          <div className="control">
            <input
              className="input"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              type="text"
              placeholder="Book Author"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Summary</label>
          <div className="control">
            <input
              className="input"
              value={year}
              onChange={(e) => setSummary(e.target.value)}
              type="text"
              placeholder="Book Summary"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Publisher</label>
          <div className="control">
            <input
              className="input"
              value={publisher}
              onChange={(e) => setPublisher(e.target.value)}
              type="text"
              placeholder="Book Publisher"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Page Count</label>
          <div className="control">
            <input
              className="input"
              value={pageCount}
              onChange={(e) => setPageCount(e.target.value)}
              type="text"
              placeholder="Page Count"
            />
          </div>
          <div className="field">
            <label className="label">Read Page</label>
            <div className="control">
              <input
                className="input"
                value={readPage}
                onChange={(e) => setReadPage(e.target.value)}
                type="text"
                placeholder="Read Page"
              />
            </div>
            <div className="field">
              <label className="label">Reading</label>
              <div className="control">
                <input
                  className="input"
                  value={reading}
                  onChange={(e) => setReading(e.target.value)}
                  type="text"
                  placeholder="Reading"
                />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <button className="button is-primary">Save</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
