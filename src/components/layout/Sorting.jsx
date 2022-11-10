import { Card } from "../styles/Card";
import { SortingItem } from "../styles/SortingItem";
import { CardtTitle } from "../styles/CardTitle";
import { useState } from "react";
import { Label, Span, StyledInput } from "../styles/Input.styled";
import { Icon } from "../../Icons";

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
            <SortingItem>
              <Label htmlFor="lowToHigh">
                <Span type="radio" active={selectedInput === "lowToHigh"}>
                  <Icon name="check" width="10" height="8" />
                </Span>
                Price low to high
                <StyledInput
                  id="lowToHigh"
                  type="radio"
                  name="sorting"
                  value="lowToHigh"
                  checked={selectedInput === "lowToHigh"}
                  onChange={handleSelectChange}
                />
              </Label>
            </SortingItem>
            <SortingItem>
              <Label htmlFor="highToLow">
                <Span type="radio" active={selectedInput === "highToLow"}>
                  <Icon name="check" width="10" height="8" />
                </Span>
                Price high to low
                <StyledInput
                  id="highToLow"
                  type="radio"
                  name="deneme"
                  value="highToLow"
                  checked={selectedInput === "highToLow"}
                  onChange={handleSelectChange}
                />
              </Label>
            </SortingItem>
            <SortingItem>
              <Label htmlFor="newToOld">
                <Span type="radio" active={selectedInput === "newToOld"}>
                  <Icon name="check" width="10" height="8" />
                </Span>
                New to old
                <StyledInput
                  id="newToOld"
                  type="radio"
                  name="sorting"
                  value="newToOld"
                  checked={selectedInput === "newToOld"}
                  onChange={handleSelectChange}
                />
              </Label>
            </SortingItem>
            <SortingItem>
              <Label htmlFor="oldToNew">
                <Span type="radio" active={selectedInput === "oldToNew"}>
                  <Icon name="check" width="10" height="8" />
                </Span>
                Old to new
                <StyledInput
                  id="oldToNew"
                  type="radio"
                  name="sorting"
                  value="oldToNew"
                  checked={selectedInput === "oldToNew"}
                  onChange={handleSelectChange}
                />
              </Label>
            </SortingItem>
          </ul>
        </div>
      </Card>
    </>
  );
}
