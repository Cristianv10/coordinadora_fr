import { useNavigate } from "react-router";
import HomeView from "../views/home/Home";
import { useEffect } from "react";

const HomePage = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");

  console.log("Token:", token);
  console.log("ID:", id);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  return <HomeView />;
};
export default HomePage;
