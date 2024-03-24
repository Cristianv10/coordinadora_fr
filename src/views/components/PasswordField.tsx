import { useState } from "react";
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';


interface PasswordInputProps {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  name: string;
  required?: boolean;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ value, handleChange, id, name, required }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={{position: 'relative', display: 'inline-block', width: '95.4%'}}>
      <input
        type={showPassword ? "text" : "password"}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        required={required}
        style={{paddingRight: '30px'}}
      />
      <span 
        onClick={toggleShowPassword} 
        style={{
          position: 'absolute', 
          right: '10px', 
          top: '50%', 
          transform: 'translateY(-50%)', 
          cursor: 'pointer'
        }}
      >
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </span>
    </div>
  );
}

export default PasswordInput;