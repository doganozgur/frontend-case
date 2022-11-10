import React from "react";
import { Searcbar } from "../styles/Searchbar";

export default function Combobox({ type }) {
  return (
    <>
      {/* Search bar */}
      <Searcbar placeholder={`Search ${type}`} />
      {/* Brands listing */}
    </>
  );
}
