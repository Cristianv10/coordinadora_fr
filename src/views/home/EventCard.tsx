import { useState } from "react";
import ConfirmationDialog from "./ConfirmDialog";
import eventService from "../../services/events";
import { useNavigate } from "react-router";

interface Event {
  id: number;
  name: string;
  city: string;
  description: string;
  details: string;
  date: string;
  participants: number;
}

interface EventCardProps {
  event: Event;
  onUpdate: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onUpdate }) => {
  const [counter, setCounter] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [action, setAction] = useState<"update" | "delete">("update");
  const navigate = useNavigate();

  const date = new Date(event.date);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const openModal = (action: "update" | "delete") => {
    setAction(action);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const confirmChanges = async () => {
    if (action === "update") {
      const data = {
        id: event.id,
        participants: counter,
      };
      await eventService.updateEvent(data);
      setCounter(0);
    } else if (action === "delete") {
      await eventService.deleteEvent(event.id);
    }
    setModalIsOpen(false);
    onUpdate();
    navigate("/home");
  };

  return (
    <>
      <div key={event.id} className="event">
        <button
          style={{
            marginLeft: "90%",
            fontSize: "8px",
          }}
          onClick={() => openModal("delete")}
        >
          X
        </button>
        <p
          style={{ textAlign: "left", fontSize: "10px", marginBottom: "0px" }}
        >{`Total participants: ${event.participants}`}</p>
        <h3 className="event-title">{event.name}</h3>
        <p className="event-p">
          {event.city} - {`${day}/${month}/${year}`}
        </p>
        <p className="event-p">{event.details}</p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
          }}
        >
          <button className="event-button" onClick={handleDecrement}>
            Decrease
          </button>
          <button className="event-button" onClick={handleIncrement}>
            Increase
          </button>
        </div>
        <div style={{ marginTop: "8px", marginBottom: "8px", width: "250px" }}>
          <span>{`You are adding ${counter} participants`}</span>
        </div>
        <button
          className="event-button-save"
          onClick={() => openModal("update")}
        >
          Guardar
        </button>
        <ConfirmationDialog
          open={modalIsOpen}
          onClose={closeModal}
          onConfirm={confirmChanges}
        />
      </div>
    </>
  );
};

export default EventCard;
