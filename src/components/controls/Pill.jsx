import React from "react";
import { PillStyled } from "../styles/Pill.styled";

export default function Pill({ label }) {
  return <PillStyled>{label}</PillStyled>;
}
