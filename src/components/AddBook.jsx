import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../utils/booksSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function AddBook() {
  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
    image: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector((state) => state.books.categories);
  const handleChange = (e) =>
    setBook({ ...book, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(book));
    navigate("/");
  };
  return (
    <div className="p-6 max-w-lg mx-auto border rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Add Book</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="author"
          placeholder="Author"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <select
          name="category"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        ></textarea>
        <input
          name="rating"
          type="number"
          step="0.1"
          placeholder="Rating (Below 5)"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded"
        >
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;
