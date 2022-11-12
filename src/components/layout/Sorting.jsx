import { Card } from "../styles/Card";
import { SortingItem } from "../styles/SortingItem";
import { CardtTitle } from "../styles/CardTitle";
import { useState } from "react";
import { Label, Span, StyledInput } from "../styles/Input.styled";
import { Icon } from "../../Icons";
import { useDispatch, useSelector } from "react-redux";
import { sortBy } from "../../redux/features/filterSlice";

// Sorting list data
const sortingListData = [
  { id: 1, title: "Price low to high", value: "lowToHigh" },
  { id: 2, title: "Price high to low", value: "highToLow" },
  { id: 3, title: "New to old", value: "newToOld" },
  { id: 4, title: "Old to new", value: "oldToNew" },
];

const title = "Sorting";

export default function Sorting() {
  const sortValue = useSelector((state) => state.filter.sortValue);
  const [selectedInput, setSelectedInput] = useState(sortValue);
  const dispatch = useDispatch();

  function handleSort(e) {
    if (e.target.value !== undefined) {
      dispatch(sortBy(e.target.value));
    }
  }

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
                <Label htmlFor={value} onClick={handleSort}>
                  <Span type="radio" active={sortValue === value}>
                    <Icon name="check" width="10" height="8" />
                  </Span>
                  {title}
                  <StyledInput
                    id={value}
                    type="radio"
                    name="sorting"
                    value={value}
                    checked={sortValue === value}
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
