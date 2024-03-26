import React from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import {
  setUsername,
  setEmail,
  setPassword,
  setVerifyPassword,
  resetForm,
} from "../../store/registerReducer";
import PasswordInput from "../components/PasswordField";
import userService from "../../services/users";
import TextInput from "../components/TextInput";
import { useAppSelector } from "../../store";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formData = useAppSelector((state) => state.registrationForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "username":
        dispatch(setUsername(value));
        break;
      case "email":
        dispatch(setEmail(value));
        break;
      case "password":
        dispatch(setPassword(value));
        break;
      case "verifyPassword":
        dispatch(setVerifyPassword(value));
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.verifyPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const accountData = {
      name: formData.username,
      email: formData.email,
      password: formData.password,
    };
    try {
      const data = userService.createAccount(accountData);
      console.log(data);
      navigate("/login");
      dispatch(resetForm());
    } catch (error) {
      console.error(error);
    }
  };

  const { username, email, password, verifyPassword } = formData;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <TextInput
            value={username}
            handleChange={handleChange}
            id="username"
            name="username"
            type="username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <TextInput
            value={email}
            handleChange={handleChange}
            id="email"
            name="email"
            type="email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <PasswordInput
            value={password}
            handleChange={handleChange}
            id="password"
            name="password"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="verifyPassword">Verify Password:</label>
          <PasswordInput
            value={verifyPassword}
            handleChange={handleChange}
            id="verifyPassword"
            name="verifyPassword"
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Register
        </button>
      </form>
    </>
  );
};

export default RegistrationForm;
