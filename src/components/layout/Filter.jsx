import { Card } from "../styles/Card";
import { CardtTitle } from "../styles/CardTitle";
import Combobox from "../controls/Combobox";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCompaniesFetch } from "../../redux/features/companiesSlice";

export default function Filter({ title }) {
  const items = useSelector((state) => state.items.items.items);
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.companies?.items.companies);
  useEffect(() => {
    dispatch(getCompaniesFetch());
  }, [dispatch]);

  function _decideData(title) {
    switch (title) {
      case "Brands":
        return companies;
      case "Tags":
        return items;
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
