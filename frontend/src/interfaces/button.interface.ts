import { ReactNode } from "react";

export interface iButton extends iStyledButton {
  children: ReactNode;
  onClick: () => void;
  type?: "button" | "submit" | "reset" | undefined
}

export interface iStyledButton {
  background_color?: string;
  color?: string;
  border?: string;
  hover_background_color?: string;
  hover_color?: string;
  hover_border?: string;
}
