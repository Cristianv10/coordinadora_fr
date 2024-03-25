import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/events">My Events</Link>
        </li>
        <li>
          <Link to="/">Log Out</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;