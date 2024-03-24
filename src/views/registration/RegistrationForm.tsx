import { useState } from "react";
import { useNavigate } from "react-router";
import PasswordInput from "../components/PasswordField";

const RegistrationForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
      verifyPassword: '',
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
      alert('Las contraseñas no coinciden');
      return;
    }
    console.log('Formulario enviado:', formData);
    navigate('/login')
  };
  
    const { username, email, password, verifyPassword } = formData;

    return(
        <>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
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
            <button type="submit" className="submit-button">Register</button>          </form>

        </>

    )
}

export default RegistrationForm;