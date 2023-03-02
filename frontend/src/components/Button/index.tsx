import { iButton } from "../../interfaces/button.interface";
import { StyledButton } from "./style";

const Button = ({ children, onClick, background_color }: iButton) => {
  return (
    <StyledButton onClick={onClick} background_color={background_color}>
      {children}
    </StyledButton>
  );
};
export default Button;
