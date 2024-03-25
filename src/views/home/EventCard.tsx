import { useState } from "react";
import ConfirmationDialog from "./ConfirmDialog";

interface Event {
  id: number;
  title: string;
  description: string;
}

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const [counter, setCounter] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const totalParticipants = 100;

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const confirmChanges = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div key={event.id} className="event">
        <p
          style={{ textAlign: "right", fontSize: "10px", marginBottom: "0px" }}
        >{`Total participants: ${totalParticipants}`}</p>
        <h3 className="event-title">{event.title}</h3>
        <p className="event-p">{event.description}</p>
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
        <button className="event-button-save" onClick={openModal}>
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
