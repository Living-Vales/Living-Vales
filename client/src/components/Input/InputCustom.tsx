import React, {useState} from "react";
import { useFormContext } from "react-hook-form";
import { Input, HidePassword, PasswordDiv} from "./InputCustomStyle";

interface InputProps {
  width?: number;
  height?: number;
  label: string;
  id: string;
  placeholder?: string;
  errorMessage?: boolean;
  defaultType?: string;
  value?: string | number | undefined | any;
  onChange?: any;
  autoFocus?: any;
  showHidePassword?: boolean;
}

export function InputCustom({
  width,
  height,
  label,
  id,
  placeholder = "",
  errorMessage,
  value,
  defaultType,
  onChange,
  showHidePassword = false
  
}: InputProps) {
  const { register } = useFormContext();
  const [hidePassword, setHidePassword] = useState(false)

  const handlePasswordHide = () => setHidePassword(!hidePassword)

  return (
    <>
      <label htmlFor={id}>
        {label}
      </label>
      <PasswordDiv>
        <Input
        id={id} 
        value={value}
        placeholder={placeholder}
        type={hidePassword ? 'text' : defaultType}
        {...register(id)}
        autoFocus
        errMsg={errorMessage}
        />
        <HidePassword hidden={!showHidePassword} onClick={handlePasswordHide} hidePassword={hidePassword} />
      </PasswordDiv>
    </>
   
  );
}

