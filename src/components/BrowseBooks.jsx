import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector((state) => state.books.books) || [];
  const [search, setSearch] = React.useState("");
  const decodedCategory = category
    ? decodeURIComponent(category).toLowerCase()
    : null;
  const filteredBooks = books.filter(
    (b) =>
      b.title.toLowerCase().includes(search.toLowerCase()) &&
      (!decodedCategory || b.category.toLowerCase() === decodedCategory)
  );

  return (
    <div className="p-6">
      <input
        type="text"
        className="border p-2 w-full"
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-3sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 place-items-center">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="border p-10 bg-cyan-100  rounded-lg">
              <img src={book.image} alt={book.title} className="w-40 h-40" />
              <h3 className="font-bold">{book.title}</h3>
              <p>{book.author}</p>
              <Link to={`/books/${book.id}`}>
                <button className="text-red-300 bg-pink-950 rounded border p-1">
                  View Details
                </button>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">
            No books found in this category.
          </p>
        )}
      </div>
    </div>
  );
}

export default BrowseBooks;
