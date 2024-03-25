import { useEffect, useState } from "react";
import eventService from "../../services/events";
import Navbar from "../components/NavBar";
import EventCard from "./EventCard";
const HomeView = () => {
  const [events, setEvents] = useState([]);

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
  }, []);

  // ...

  return (
    <>
      <Navbar></Navbar>
      <div className="grid-container-event">
        {events.map((event) => (
          <EventCard event={event} />
        ))}
      </div>
    </>
  );
};

export default HomeView;
