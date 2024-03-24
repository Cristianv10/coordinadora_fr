import '../../../src/App.css';
import register from '../../assets/register.svg'
import RegistrationForm from './RegistrationForm';

const RegistrationView = () => {
    return (
    <>
      <div className="grid-container">
        <div className="text-container">
          <h2>Create a event subscription account</h2>
          <p>Please fill out the form to create your account.</p>
          <img src={register} alt="Register Icon" className="register-icon" />
        </div>
        <div className="card">
          <RegistrationForm></RegistrationForm>
        </div>
      </div>
    </>
  );
}

export default RegistrationView;



