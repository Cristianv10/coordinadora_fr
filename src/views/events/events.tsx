import Navbar from "../components/NavBar";
import EventsRegistrationForm from "./EventsRegistrationForm";

const EventsView = () => {
  return (
    <>
      <Navbar />
      <div className=".flex-column">
        <EventsRegistrationForm></EventsRegistrationForm>
      </div>
    </>
  );
};
export default EventsView;
