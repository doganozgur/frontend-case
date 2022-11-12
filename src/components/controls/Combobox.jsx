import React, { useMemo, useState } from "react";
import { Icon } from "../../Icons";
import { ComboboxStyled, Searcbar } from "../styles/Combobox";
import { Label, Span, StyledInput } from "../styles/Input.styled";
import { SortingItem } from "../styles/SortingItem";
import { getTagNames, sortAlphabetically } from "../../utils";
import { useDispatch } from "react-redux";
import { brandsFilter, tagsFilter } from "../../redux/features/filterSlice";

export default function Combobox({ type, options, title }) {
  // Search term on filter
  const [searchTerm, setSearchTerm] = useState("");
  // Setting active props to the filter list items
  const [selectedInputs, setSelectedInputs] = useState([]);
  const dispatch = useDispatch();
  // Tags from util function
  const tags = getTagNames(options, title);
  // Tags ordered by alphabetically
  const orderedTags = useMemo(() => {
    return sortAlphabetically(tags);
  }, [tags]);
  console.log(options);

  /**
   * @func handleSelectChange
   * Pass the current input value into the "selectedInput" state variable
   * @param {event} event onChange event parameter from the input
   */
  const handleSelectChange = (event) => {
    const value = event.target.value;
    console.log(selectedInputs);
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

  // Dispatch brands filtering action
  function handleBrandsFilter(account, slug) {
    dispatch(brandsFilter({ account, slug }));
  }

  // Dispatch tags filtering action
  function handleTagsFilter(name, i) {
    dispatch(tagsFilter({ name, i }));
  }
  return (
    <ComboboxStyled>
      {/* Search bar */}
      <Searcbar onChange={handleChange} placeholder={`Search ${title}`} />
      {/* Filter */}
      <ul>
        <SortingItem>
          <Label htmlFor="all">
            <Span type={type} active={selectedInputs === "all"}>
              <Icon name="check" width="10" height="8" />
            </Span>
            All
          </Label>
          <StyledInput
            id="all"
            type={type}
            name="brand"
            value="all"
            checked={selectedInputs === "all"}
            onChange={handleSelectChange}
          />
        </SortingItem>
        {title === "Brands" &&
          // Match search term concurrently with the list data
          options
            ?.filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
              )
                return val;
            })
            // Map through filtered list data
            .map(({ account, name, slug }) => (
              <SortingItem key={account}>
                <Label
                  htmlFor={account}
                  onClick={() => handleBrandsFilter(account, slug)}
                >
                  <Span type={type} active={selectedInputs.includes(slug)}>
                    <Icon name="check" width="10" height="8" />
                  </Span>
                  {name}
                </Label>
                <StyledInput
                  id={account}
                  type={type}
                  name="brand"
                  value={slug}
                  checked={selectedInputs.includes(slug)}
                  onChange={handleSelectChange}
                />
              </SortingItem>
            ))}
        {title === "Tags" &&
          // Match search term concurrently with the list data
          orderedTags
            ?.filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (val.toLowerCase().includes(searchTerm.toLowerCase()))
                return val;
            })
            // Map through filtered list data
            .map((name, i) => (
              <SortingItem key={i}>
                <Label htmlFor={i} onClick={() => handleTagsFilter(name, i)}>
                  <Span type={type} active={selectedInputs.includes(name)}>
                    <Icon name="check" width="10" height="8" />
                  </Span>
                  {name}
                </Label>
                <StyledInput
                  id={i}
                  type={type}
                  name="tag"
                  value={name}
                  checked={selectedInputs.includes(name)}
                  onChange={handleSelectChange}
                />
              </SortingItem>
            ))}
      </ul>
    </ComboboxStyled>
  );
}
