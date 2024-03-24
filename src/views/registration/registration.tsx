import { useState } from 'react';
import '../../../src/App.css';
import register from '../../assets/register.svg'

const RegistrationView = () => {
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
    };
    
      const { username, email, password, verifyPassword } = formData;
    

    return (
    <>
      <div className="grid-container">
        <div className="text-container">
          <h2>Create a event subscription account</h2>
          <p>Please fill out the form to create your account.</p>
          <img src={register} alt="Register Icon" className="register-icon" />

        </div>
        <div className="card">
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
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="verifyPassword">Verify Password:</label>
              <input
                type="password"
                id="verifyPassword"
                name="verifyPassword"
                value={verifyPassword}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-button">Register</button>          </form>
        </div>
      </div>
    </>
  );
}

export default RegistrationView;



