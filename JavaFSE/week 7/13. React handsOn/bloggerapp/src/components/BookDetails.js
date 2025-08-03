import React from "react";

export default function BookDetails({ books }) {
  return (
    <div>
      <h1 style={{color:'red'}}>Book Details</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h3>{book.bname}</h3>
            <h4>{book.price}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
}
