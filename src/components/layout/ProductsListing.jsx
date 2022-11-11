import React, { useEffect, useState } from "react";
import { Main, PillHolder, Title } from "../styles/ProductsListing";
import Pagination from "../controls/Pagination";
import Products from "./Products";
import { PillStyled } from "../styles/Pill.styled";
import { useSelector, useDispatch } from "react-redux";
import { getItemsFetch } from "../../redux/features/itemsSlice";

export default function ProductsListing() {
  const [category, setCategory] = useState("mug");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(16);
  const [selectedCategory, setSelectedCategory] = useState("mug");
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items.items);

  useEffect(() => {
    dispatch(getItemsFetch());
  }, [dispatch]);

  const categories = [...new Set(items?.map((item) => item.itemType))];

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const filteredItems = items?.filter((item) => item.itemType === category);

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentProducts = filteredItems?.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  return (
    <Main>
      <Title>Products</Title>
      {/* Filter by category */}
      <PillHolder>
        {categories?.map((category, _i) => (
          <li key={_i}>
            <PillStyled
              active={selectedCategory === category}
              onClick={() => {
                setCategory(category);
                setSelectedCategory(category);
              }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
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
