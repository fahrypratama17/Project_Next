import { inputFieldProps } from "@/types/types";

const InputField = ({ label, placeholder, type }: inputFieldProps) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputField;
