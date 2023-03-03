import { iButton } from "../../interfaces/button.interface";
import { StyledButton } from "./style";

const Button = ({
  children,
  onClick,
  background_color,
  border,
  color,
  hover_background_color,
  hover_border,
  hover_color,
}: iButton) => {
  return (
    <StyledButton
      onClick={onClick}
      background_color={background_color}
      border={border}
      color={color}
      hover_background_color={hover_background_color}
      hover_border={hover_border}
      hover_color={hover_color}
    >
      {children}
    </StyledButton>
  );
};
export default Button;
