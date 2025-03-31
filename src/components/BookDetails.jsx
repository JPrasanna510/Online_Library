import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function BookDetails() {
  const { id } = useParams();
  const books = useSelector((state) => state.books.books) || [];
  const book = books.find((b) => b.id === Number(id));
  const navigate = useNavigate();
  if (!book)
    return <p className="text-center text-gray-600">Book not found.</p>;
  return (
    <div className="flex flex-col items-center justify-center p-6 mx-50 my-20 bg-red-200">
      <img src={book.image} alt={book.title} className="w-48 h-48 rounded" />
      <h1 className="text-2xl font-bold mt-4">{book.title}</h1>
      <p className="text-gray-700">by {book.author}</p>
      <p className="mt-2">{book.description}</p>
      <p className="mt-2 font-semibold">Rating: {book.rating} / 5</p>
      <button
        onClick={() => navigate(-1)}
        className="mt-4 px-4 py-2 bg-pink-900 text-white rounded"
      >
        Back
      </button>
    </div>
  );
}

export default BookDetails;
