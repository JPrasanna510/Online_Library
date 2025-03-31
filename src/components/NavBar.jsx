import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-pink-900 p-4 text-white flex justify-between">
      <div className="text-lg font-bold">Online Library</div>
      <div>
        <Link className="px-4" to="/">
          Home
        </Link>
        <Link className="px-4" to="/books">
          Browse Books
        </Link>
        <Link className="px-4" to="/add-book">
          Add Book
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
