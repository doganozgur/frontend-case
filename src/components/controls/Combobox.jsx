import React, { useMemo, useState } from "react";
import { Icon } from "../../Icons";
import { ComboboxStyled, Searcbar } from "../styles/Combobox";
import { Label, Span, StyledInput } from "../styles/Input.styled";
import { SortingItem } from "../styles/SortingItem";
import { getTagNames, sortAlphabetically } from "../../utils";

export default function Combobox({ type, options, title }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedInputs, setSelectedInputs] = useState([]);

  const tags = getTagNames(options, title);
  const orderedTags = useMemo(() => {
    return sortAlphabetically(tags);
  }, [tags]);

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

  // Store the searchbar value into the state called 'searchTerm'
  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  console.log(selectedInputs);

  return (
    <ComboboxStyled>
      {/* Search bar */}
      <Searcbar onChange={handleChange} placeholder={`Search ${title}`} />
      {/* Brands listing */}
      <ul>
        <SortingItem>
          <Label htmlFor="all">
            <Span type={type} active={selectedInputs === "all"}>
              <Icon name="check" width="10" height="8" />
            </Span>
            All
            <StyledInput
              id="all"
              type={type}
              name="brand"
              value="all"
              checked={selectedInputs === "all"}
              onChange={handleSelectChange}
            />
          </Label>
        </SortingItem>
        {/* Match search term concurrently with the list data */}
        {title === "Brands" &&
          options
            ?.filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
              )
                return val;
            })
            .map(({ account, name, slug, added }) => (
              <SortingItem key={account || added}>
                <Label htmlFor={account || added}>
                  <Span type={type} active={selectedInputs.includes(slug)}>
                    <Icon name="check" width="10" height="8" />
                  </Span>
                  {name}
                  <StyledInput
                    id={account || added}
                    type={type}
                    name="brand"
                    value={slug}
                    checked={selectedInputs.includes(slug)}
                    onChange={handleSelectChange}
                  />
                </Label>
              </SortingItem>
            ))}
        {title === "Tags" && orderedTags ? (
          orderedTags
            ?.filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (val.toLowerCase().includes(searchTerm.toLowerCase()))
                return val;
            })
            .map((name, i) => (
              <SortingItem key={i}>
                <Label htmlFor={i}>
                  <Span type={type} active={selectedInputs.includes(name)}>
                    <Icon name="check" width="10" height="8" />
                  </Span>
                  {name}
                  <StyledInput
                    id={i}
                    type={type}
                    name="tag"
                    value={name}
                    checked={selectedInputs.includes(name)}
                    onChange={handleSelectChange}
                  />
                </Label>
              </SortingItem>
            ))
        ) : (
          <div>Loading...</div>
        )}
      </ul>
    </ComboboxStyled>
  );
}
