import { inputFieldProps } from "@/types/types";

const InputField = ({ label, placeholder, type }: inputFieldProps) => {
  return (
    <div className="grid gap-2">
      <label className="text-lg font-semibold">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="border-primary-400 bg-primary-100/20 hover:bg-primary-100/35 rounded-lg border px-5 py-3 placeholder-gray-600"
      />
    </div>
  );
};

export default InputField;
