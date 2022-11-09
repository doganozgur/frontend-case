import { Card } from "../styles/Card";
import { SortingItem } from "../styles/SortingItem";
import { CardtTitle } from "../styles/CardTitle";
import Input from "../controls/Input";

const inputValues = [
  {id: "1", label:"Price low to high", type:"radio", name: "sorting", value: "low-to-high"},
  {id: "2", label:"Price high to low", type:"radio", name: "sorting", value: "high-to-low"},
  {id: "3", label:"New to old", type:"radio", name: "sorting", value: "new-to-old"},
  {id: "4", label:"Old to new", type:"radio", name: "sorting", value: "old-to-new"},
]

const title="Sorting";

export default function Sorting() {

  return (
    <>
      <Card>
        <CardtTitle>{title}</CardtTitle>
        <div>
          <ul>
            {inputValues.map(({id, label, type, name, value}) => (
              <SortingItem key={id}>
                <Input
                  label={label}
                  type={type}
                  name={name}
                  value={value}
                />
              </SortingItem>
            ))}
          </ul>
        </div>
      </Card>
    </>
  );
}
