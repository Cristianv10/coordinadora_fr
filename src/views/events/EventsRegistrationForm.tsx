import React from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import {
  setName,
  setDate,
  setCity,
  setParticipants,
  setDetails,
  resetForm,
} from "../../store/eventReducer";
import eventService from "../../services/events";
import TextInput from "../components/TextInput";
import { useAppSelector } from "../../store";

const EventsRegistrationForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formData = useAppSelector((state) => state.eventRegistrationForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        dispatch(setName(value));
        break;
      case "date":
        dispatch(setDate(value));
        break;
      case "city":
        dispatch(setCity(value));
        break;
      case "participants":
        dispatch(setParticipants(value));
        break;
      case "details":
        dispatch(setDetails(value));
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const accountData = {
      name: formData.name,
      date: formData.date,
      city: formData.city,
      participants: formData.participants,
      details: formData.details,
      user_id: localStorage.getItem("id"),
    };
    try {
      const data = eventService.createEvent(accountData);
      console.log(data);
      navigate("/home");
      dispatch(resetForm());
    } catch (error) {
      console.error(error);
    }
  };

  const { name, date, city, participants, details } = formData;

  return (
    <>
      <h1>Create your event</h1>
      <div
        style={{
          backgroundColor: "#f0f0f0",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div style={{ backgroundColor: "#f0f0f0" }}>
            <label htmlFor="name">Name:</label>
            <TextInput
              value={name}
              handleChange={handleChange}
              id="name"
              name="name"
              type="name"
              placeholder="Event Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <TextInput
              value={date}
              handleChange={handleChange}
              id="date"
              name="date"
              type="date"
              placeholder="Event Date"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="City">City:</label>
            <TextInput
              value={city}
              handleChange={handleChange}
              id="city"
              name="city"
              type="city"
              placeholder="Event City"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="participants">Participants:</label>
            <TextInput
              value={participants}
              handleChange={handleChange}
              id="participants"
              name="participants"
              type="number"
              placeholder="Event Participants"
              max="1000"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="details">Details:</label>
            <TextInput
              value={details}
              handleChange={handleChange}
              id="details"
              name="details"
              type="details"
              placeholder="Event Details"
            />
          </div>
          <button type="submit" className="submit-button">
            Create
          </button>{" "}
        </form>
      </div>
    </>
  );
};

export default EventsRegistrationForm;
