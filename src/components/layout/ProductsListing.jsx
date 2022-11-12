import React, { useEffect, useState } from "react";
import { Main, PillHolder, Title } from "../styles/ProductsListing";
import Pagination from "../controls/Pagination";
import Products from "./Products";
import { PillStyled } from "../styles/Pill.styled";
import { useSelector, useDispatch } from "react-redux";
import { getItemsFetch } from "../../redux/features/itemsSlice";

export default function ProductsListing() {
  const [itemType, setItemType] = useState("mug");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(16);
  const [selectedCategory, setSelectedCategory] = useState("mug");
  const [selectedFilters, setSelectedFilters] = useState();

  const dispatch = useDispatch();

  const items = useSelector((state) => state.items.items.items);
  const filters = useSelector((state) => state.filter);

  useEffect(() => {
    setSelectedFilters(filters);
    dispatch(getItemsFetch());
  }, [dispatch, filters]);

  console.log(selectedFilters);
  // Available categories
  const itemTypes = [...new Set(items?.map((item) => item.itemType))];
  // Product list paginate function
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // Filter by itemType
  const filteredItems = items?.filter((item) => item.itemType === itemType);

  // Sort items
  function _sortBy(items) {
    switch (filters.sortValue) {
      case "newToOld":
        return items?.sort((a, b) => b.added - a.added);
      case "oldToNew":
        return items?.sort((a, b) => a.added - b.added);
      case "lowToHigh":
        return items?.sort((a, b) => a.price - b.price);
      case "highToLow":
        return items?.sort((a, b) => b.price - a.price);
      default:
        return items;
    }
  }

  console.log(filters);
  _sortBy(filteredItems);

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentProducts = filteredItems?.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  return (
    <Main>
      <Title>Products</Title>
      {/* Filter by itemType */}
      <PillHolder>
        {itemTypes?.map((itemType, _i) => (
          <li key={_i}>
            <PillStyled
              active={selectedCategory === itemType}
              onClick={() => {
                setItemType(itemType);
                setSelectedCategory(itemType);
              }}
            >
              {itemType.charAt(0).toUpperCase() + itemType.slice(1)}
            </PillStyled>
          </li>
        ))}
      </PillHolder>
      {/* Products listing */}
      <Products products={currentProducts} />
      <Pagination
        itemsPerPage={itemsPerPage}
        totalPosts={filteredItems?.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </Main>
  );
}
