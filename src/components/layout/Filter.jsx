import { Card } from "../styles/Card";
import { CardtTitle } from "../styles/CardTitle";
import Combobox from "../controls/Combobox";

const inputValues = [
  {
    id: "1",
    label: "Price low to high",
    type: "radio",
    name: "sorting",
    value: "low-to-high",
  },
  {
    id: "2",
    label: "Price high to low",
    type: "radio",
    name: "sorting",
    value: "high-to-low",
  },
  {
    id: "3",
    label: "New to old",
    type: "radio",
    name: "sorting",
    value: "new-to-old",
  },
  {
    id: "4",
    label: "Old to new",
    type: "radio",
    name: "sorting",
    value: "old-to-new",
  },
];

export default function Filter({ title }) {
  return (
    <>
      <Card>
        <CardtTitle>{title}</CardtTitle>
        <div>
          <Combobox type="brand" />
        </div>
      </Card>
    </>
  );
}
