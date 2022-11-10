import React, { useState } from "react";
import { Icon } from "../../Icons";
import { ComboboxStyled, Searcbar } from "../styles/Combobox";
import { Label, Span, StyledInput } from "../styles/Input.styled";
import { SortingItem } from "../styles/SortingItem";

export default function Combobox({ type, options }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedInputs, setSelectedInputs] = useState([]);

  /**
   * @func handleSelectChange
   * Pass the current input value into the "selectedInput" state variable
   * @param {event} event onChange event parameter from the input
   */
  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedInputs(
      selectedInputs.includes(value)
        ? selectedInputs.filter((i) => i !== value)
        : [...selectedInputs, value]
    );
  };

  // Searchbar value
  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  return (
    <ComboboxStyled>
      {/* Search bar */}
      <Searcbar onChange={handleChange} placeholder={`Search ${type}`} />
      {/* Brands listing */}
      <ul>
        <SortingItem>
          <Label htmlFor="all">
            <Span type="checkbox" active={selectedInputs === "all"}>
              <Icon name="check" width="10" height="8" />
            </Span>
            All
            <StyledInput
              id="all"
              type="checkbox"
              name="brand"
              value="all"
              checked={selectedInputs === "all"}
              onChange={handleSelectChange}
            />
          </Label>
        </SortingItem>
        {/* Match search term concurrently with the list data */}
        {options
          ?.filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
            )
              return val;
          })
          .map(({ account, name, slug }) => (
            <SortingItem key={account}>
              <Label htmlFor={account}>
                <Span type="checkbox" active={selectedInputs.includes(slug)}>
                  <Icon name="check" width="10" height="8" />
                </Span>
                {name}
                <StyledInput
                  id={account}
                  type="checkbox"
                  name="brand"
                  value={slug}
                  checked={selectedInputs.includes(slug)}
                  onChange={handleSelectChange}
                />
              </Label>
            </SortingItem>
          ))}
      </ul>
    </ComboboxStyled>
  );
}
