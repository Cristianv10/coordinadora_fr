import { useState } from "react";
import { useNavigate } from "react-router";
import PasswordInput from "../components/PasswordField";
import TextInput from "../components/TextInput";
import userService from "../../services/users";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const accountData = {
      email: formData.email,
      password: formData.password,
    };
    try {
      userService.login(accountData);
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  const { email, password } = formData;

  return (
    <>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className="submit-button">
          Log in
        </button>
      </form>
    </>
  );
};

export default LoginForm;
