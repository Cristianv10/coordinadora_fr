// LoginForm.tsx
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import PasswordInput from "../components/PasswordField";
import TextInput from "../components/TextInput";
import userService from "../../services/users";
import { setEmail, setPassword } from "../../store/loginReducer";
import { useAppSelector } from "../../store";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email, password } = useAppSelector((state) => state.login);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") {
      dispatch(setEmail(value));
    } else if (name === "password") {
      dispatch(setPassword(value));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const accountData = {
      email: email,
      password: password,
    };
    try {
      userService.login(accountData);
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

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
