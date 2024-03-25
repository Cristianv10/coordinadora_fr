import { Link } from "react-router-dom";

const LandingView = () => {
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");

  console.log("Token:", token);
  console.log("ID:", id);

  return (
    <div className="home-container">
      <div className="content">
        <h1>Welcome to event tracker</h1>
        <h2>Track your events and subscribe to them</h2>
        <p>Choose an option below to get started:</p>
        <div className="button-container">
          <Link to="/register" className="submit-button">
            Register
          </Link>
          <Link to="/login" className="submit-button">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingView;

<button type="submit">Register</button>;
