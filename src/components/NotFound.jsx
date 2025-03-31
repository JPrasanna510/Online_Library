import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center p-10">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <Link className="text-blue-500" to="/">
        Go to Home
      </Link>
    </div>
  );
}
export default NotFound;
