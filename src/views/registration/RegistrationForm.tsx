import { useState } from "react";
import { useNavigate } from "react-router";
import PasswordInput from "../components/PasswordField";
import userService from "../../services/users";
import TextInput from "../components/TextInput";

const RegistrationForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    verifyPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
        </button>{" "}
      </form>
    </>
  );
};

export default RegistrationForm;
