import { useEffect } from "react";
import { useNavigate } from "react-router";
import EventsView from "../../src/views/events/Events";

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
