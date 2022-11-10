import { useState } from "react";
import { Icon } from "../../Icons";
import { Label, Span, StyledInput } from "../styles/Input.styled";

export default function Input({ id, label, type, name, value }) {
  const [selectedInput, setSelectedInput] = useState("newToOld");

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedInput(value);
    console.log(event.target);
  };

  return (
    <Label htmlFor={id}>
      <Span type={type} active={selectedInput === value}>
        <Icon name="check" width="8" height="5" />
      </Span>
      {label}
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        checked={selectedInput === value}
        onChange={handleSelectChange}
      />
    </Label>
  );
}
