import { useState } from 'react';
import '../../../src/App.css';
import register from '../../assets/login.svg'

const LoginView = () => {
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
      console.log('Formulario enviado:', formData);
    };
    
      const { email, password } = formData;
    

    return (
    <>
      <div className="grid-container">
        <div className="text-container">
          <h2>Log in to start planning your events</h2>
          <p>Please fill out the form to log in.</p>
          <img src={register} alt="Register Icon" className="register-icon" />

        </div>
        <div className="card">
          <form onSubmit={handleSubmit}>
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
            <button type="submit" className="submit-button">Log in</button>          </form>
        </div>
      </div>
    </>
  );
}

export default LoginView;



