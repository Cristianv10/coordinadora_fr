import { Link } from "react-router-dom";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
  };
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
          <Link to="/" onClick={handleLogout}>
            Log Out
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
