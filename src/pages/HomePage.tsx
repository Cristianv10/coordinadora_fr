import { useNavigate } from "react-router";
import HomeView from "../views/home/Home";
import { useEffect } from "react";

const HomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  return <HomeView />;
};
export default HomePage;
