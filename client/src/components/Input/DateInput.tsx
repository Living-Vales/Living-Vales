import React, { useState } from "react";
import { DateInputStyled } from "./DateInputStyle";

interface DateInputProps {
    id?: string;
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
    value?: string;
}

export const DateInput = ({
    id,
    onChange,
    value
}: DateInputProps) => {
    
    const [click, setClick] = useState(false)
    
    return (
        <DateInputStyled 
            id={id}
            type={"date"}
            onChange={onChange}
            onClick={() => setClick(true)}
            click={click}
            value={value}
        />
    )
}