import { Card } from "../styles/Card";
import { SortingItem } from "../styles/SortingItem";
import { CardtTitle } from "../styles/CardTitle";
import { useState } from "react";
import { Label, Span, StyledInput } from "../styles/Input.styled";
import { Icon } from "../../Icons";

// Sorting list data
const sortingListData = [
  { id: 1, title: "Price low to high", value: "lowToHigh" },
  { id: 2, title: "Price high to low", value: "highToLow" },
  { id: 3, title: "New to old", value: "newToOld" },
  { id: 4, title: "Old to new", value: "oldToNew" },
];

const title = "Sorting";

export default function Sorting() {
  const [selectedInput, setSelectedInput] = useState("newToOld");

  /**
   * @func handleSelectChange
   * Pass the current input value into the "selectedInput" state variable
   * @param {event} event onChange event parameter from the input
   */
  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedInput(value);
  };

  return (
    <>
      <Card>
        <CardtTitle>{title}</CardtTitle>
        <div>
          <ul>
            {sortingListData?.map(({ id, title, value }) => (
              <SortingItem key={id}>
                <Label htmlFor={value}>
                  <Span type="radio" active={selectedInput === value}>
                    <Icon name="check" width="10" height="8" />
                  </Span>
                  {title}
                  <StyledInput
                    id={value}
                    type="radio"
                    name="sorting"
                    value={value}
                    checked={selectedInput === value}
                    onChange={handleSelectChange}
                  />
                </Label>
              </SortingItem>
            ))}
          </ul>
        </div>
      </Card>
    </>
  );
}
