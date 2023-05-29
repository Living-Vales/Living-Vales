import React from "react";
import { DivButtonContainer } from "./ButtonCustomStyle";


interface ButtonProps {
  disabled?: boolean;
  width?: number;
  height?: number;
  label: string;
  onClick?: () => void;
}

export function Button({
  width = 400,
  height = 60,
  label,
  onClick,
  ...rest
}: ButtonProps) {
  return (
    <DivButtonContainer
      onClick={onClick}
      {...rest}
    >
      {label}
    </DivButtonContainer>
  );
}