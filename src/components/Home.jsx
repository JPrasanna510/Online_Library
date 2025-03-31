import { Link } from "react-router-dom";
import { initialBooks } from "../utils/dummyData";

function Home() {
  return (
    <div className="h-dvh text-center p-10 bg-[url(https://img.freepik.com/premium-photo/modern-concrete-library-interior-with-book-shelves-daylight-city-view-3d-rendering_670147-63946.jpg?w=740)] bg-no-repeat bg-cover">
      <h1 className="text-3xl text-lime-950 font-bold">
        Welcome to the Online Library
      </h1>
      <p className="mt-4">
        Explore a vast collection of books from various categories.
      </p>
      <h2 className="text-2xl text-lime-900 font-semibold mt-6">
        Book Categories
      </h2>
      <div className="flex justify-center gap-4 mt-4">
        {initialBooks
          .map((book) => book.category)
          .filter((value, index, self) => self.indexOf(value) === index)
          .map((category) => (
            <Link
              key={category}
              to={`/books/category/${encodeURIComponent(
                category.toLowerCase()
              )}`}
              className="border px-4 py-2 bg-gray-200 rounded-lg hover:bg-red-300"
            >
              {category}
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Home;
