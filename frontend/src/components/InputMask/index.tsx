import ReactInputMask from "react-input-mask";
import { iInput } from "../../interfaces/input.interface";
import { StyledInputDiv } from "../Input/style";

const InputMask = ({
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

      <ReactInputMask
        mask={mask}
        placeholder={placeholder}
        id={id}
        {...register(id)}
        type={type}
      />
    </StyledInputDiv>
  );
};

export default InputMask;
