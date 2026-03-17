import React, { useEffect, useState } from "react";

function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://openlibrary.org/search.json?q=react")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.docs.slice(0, 10)); // get top 10 results
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching book data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading books...</p>;

  return (
    <div className="container mt-4">
      <h2>Top Books on React</h2>
      {/*
      <ul className="list-group">
        {books.map((book, index) => (
          <li key={index} className="list-group-item">
            <strong>{book.title}</strong> by {book.author_name?.join(", ") || "Unknown"}
            <br />
            First published in: {book.first_publish_year || "N/A"}
          </li>
        ))}
      </ul>*/}
      <table className="table table-striped table-bordered bg-light align-left">
        <tr><th>Book title</th>
            <th>Author</th>
            <th>Year of Publication</th>
        </tr>
        {books.map((book, index) => (
          <tr key={index}>
          <td>
            <strong>{book.title}</strong> 
            </td>
            <td>by {book.author_name?.join(", ") || "Unknown"}</td>
            <td>{book.first_publish_year || "N/A"}</td>
            
          </tr>
        ))
    }
      </table>
    </div>
  );
}

export default Books;
