import { useEffect } from "react";
import EventsView from "../views/events/events";
import { useNavigate } from "react-router";

const EventsPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);
  return <EventsView />;
};
export default EventsPage;
