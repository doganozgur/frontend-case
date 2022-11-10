import { Card } from "../styles/Card";
import { CardtTitle } from "../styles/CardTitle";
import Combobox from "../controls/Combobox";
import { useCompanies } from "../../hooks/companies/useCompanies";

export default function Filter({ title }) {
  const companies = useCompanies();

  console.log(companies?.data);

  return (
    <>
      <Card>
        <CardtTitle>{title}</CardtTitle>
        <div>
          <Combobox type="brand" options={companies?.data} />
        </div>
      </Card>
    </>
  );
}
