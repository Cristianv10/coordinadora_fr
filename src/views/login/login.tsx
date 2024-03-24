import '../../../src/App.css';
import register from '../../assets/login.svg'
import LoginForm from './LoginForm';

const LoginView = () => {
    return (
    <>
      <div className="grid-container">
        <div className="text-container">
          <h2>Log in to start planning your events</h2>
          <p>Please fill out the form to log in.</p>
          <img src={register} alt="Register Icon" className="register-icon" />

        </div>
        <div className="card">
          <LoginForm></LoginForm>
          
        </div>
      </div>
    </>
  );
}

export default LoginView;



