import { useEffect, useState } from "react";
import eventService from "../../services/events";
import Navbar from "../components/NavBar";
import EventCard from "./EventCard";
const HomeView = () => {
  const [events, setEvents] = useState([]);
  const [update, setUpdate] = useState(false);

  const handleUpdate = () => {
    setUpdate((prevUpdate) => !prevUpdate);
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const fetchedEvents = await eventService.getEvents();
        setEvents(fetchedEvents);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEvents();
  }, [update]);

  // ...

  return (
    <>
      <Navbar></Navbar>
      <div className="grid-container-event">
        {events.map((event) => (
          <EventCard event={event} onUpdate={handleUpdate} />
        ))}
      </div>
    </>
  );
};

export default HomeView;
