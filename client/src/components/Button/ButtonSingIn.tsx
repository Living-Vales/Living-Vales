import React from "react"
import { ButtonSingIn } from "./ButtonCustomStyle";

interface ButtonProps {
    disabled?: boolean;
    width?: number;
    height?: number;
    label: string;
    type?: "button" | "reset" | "submit" | undefined;
    onClick?: () => void;
  }

export const ButtonSingInCustom = ({  
    width = 350,
    height = 60,
    label,
    type,
    onClick,
    ...rest} : ButtonProps) => {

    return (
    <ButtonSingIn
    type={type}
    onClick={onClick}
    {...rest}
    >
    {label}
    </ButtonSingIn>
    )
}