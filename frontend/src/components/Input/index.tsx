import ReactInputMask from "react-input-mask";
import { iInput } from "../../interfaces/input.interface";
import { StyledInputDiv } from "./style";

const Input = ({
  type = "text",
  id,
  title,
  register,
  placeholder,
  mask = "999.999.999-99",
}: iInput) => {
  return (
    <StyledInputDiv>
      <label htmlFor={id}>{title}</label>

      <input type={type} id={id} {...register(id)} placeholder={placeholder} />
    </StyledInputDiv>
  );
};

export default Input;
