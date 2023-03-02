import { ReactNode } from "react";

export interface iButton extends iStyledButton{
  children: ReactNode;
  onClick: () => void;
}

export interface iStyledButton {
  background_color?: string;
}
