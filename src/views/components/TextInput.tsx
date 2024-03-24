import { ChangeEvent } from "react";

interface TextInputProps {
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  id: string;
  name: string;
  type: string;
  required?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({ value, handleChange, id, name, type, required }) => {
  return (
    <div style={{position: 'relative', display: 'inline-block', width: '95.4%'}}>
      <input
        className="form-inputs"
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        required={required}
        style={{paddingRight: '30px'}}
      />
    </div>
  );
}

export default TextInput;