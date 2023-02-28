import ReactInputMask from "react-input-mask";
import { iInput } from "../../interfaces/input.interface";

const Input = ({
  type = "text",
  id,
  title,
  register,
  placeholder,
  mask = "999.999.999-99",
}: iInput) => {
  return (
    <div>
      <label htmlFor={id}>{title}</label>

      {id === "cpf" ||  
      id === "phone_number" ||
      id === "birth_date" ||
      id === "zipCode" ? (
        <ReactInputMask
          mask={mask}
          placeholder={placeholder}
          id={id}
          {...register(id)}
          type={type}
        />
      ) : (
        <input
          type={type}
          id={id}
          {...register(id)}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default Input;
