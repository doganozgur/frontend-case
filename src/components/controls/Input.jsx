import { useState } from "react";
import { Icon } from "../../Icons";
import { StyledInput } from "../styles/Input.styled";

export default function Input({ label, type, ...props }) {
  const [isChecked, setIsChecked] = useState(false)
  const [selectedInput, setSelectedInput] = useState("")

  const toggleChecked = e => {
    setIsChecked(() => !isChecked)
  }
  const handleChange = inputValue => {
    setSelectedInput(inputValue)
  }

  return (
    <StyledInput type={type}>
      <span><Icon name="check" width="8" height="5" /></span>
      <label><input type={type} onChange={toggleChecked} {...props} />{label}</label>
    </StyledInput>
  )
}
