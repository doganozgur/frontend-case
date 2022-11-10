import { Card } from "../styles/Card";
import { CardtTitle } from "../styles/CardTitle";
import Combobox from "../controls/Combobox";
import { useCompanies } from "../../hooks/companies/useCompanies";
import { useItems } from "../../hooks/items/useItems";

export default function Filter({ title }) {
  const companies = useCompanies();
  const items = useItems();

  function _decideData(title) {
    switch (title) {
      case "Brands":
        return companies?.data?.companies;
      case "Tags":
        return items?.data?.items;
      default:
    }
  }

  return (
    <>
      <Card>
        <CardtTitle>{title}</CardtTitle>
        <div>
          <Combobox
            type="checkbox"
            title={title}
            options={_decideData(title)}
          />
        </div>
      </Card>
    </>
  );
}
