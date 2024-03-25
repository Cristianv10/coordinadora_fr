import Navbar from "../components/NavBar";
import EventCard from "./EventCard";

const HomeView = () => {
  const events = [
    { id: 1, title: "Amelie Lens", description: "Disponible el 20/04/2024" },
    {
      id: 2,
      title: "Charlotte White",
      description: "Disponible el 20/04/2024",
    },
    { id: 3, title: "Nico Romero", description: "Disponible el 20/04/2024" },
    { id: 4, title: "Seb 7", description: "Disponible el 20/04/2024" },
    {
      id: 5,
      title: "Hernan Cattaneo",
      description: "Disponible el 20/04/2024",
    },
    {
      id: 6,
      title: "Hernan Cayetano",
      description: "Disponible el 20/04/2024",
    },
  ];

  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");

  // Imprimir el token y el id en la consola
  console.log("Token:", token);
  console.log("ID:", id);

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
