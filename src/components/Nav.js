import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="Nav-Links" alt="Link to homepage">
            Home
          </Link>
        </li>
        <li>
          <Link to="/menu" className="Nav-Links" alt="Link to menu page">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/booking" className="Nav-Links" alt="Link to booking page">
            Book
          </Link>
        </li>
        <li>
          <Link to="/about" className="Nav-Links" alt="Link to about page">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
