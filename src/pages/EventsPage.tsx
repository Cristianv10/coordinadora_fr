import { useEffect } from "react";
import { useNavigate } from "react-router";
import EventsView from "../../src/views/events/Events";

const EventsPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    console.log("token", localStorage.getItem("token"));

    const token = localStorage.getItem("token");
    if (token !== undefined && token !== null) {
      navigate("/home");
    }
  }, [navigate]);
  return <EventsView />;
};
export default EventsPage;
