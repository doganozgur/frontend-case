import React, { useState } from "react";
import { Main, PillHolder, Title } from "../styles/ProductsListing";
import { useItems } from "../../hooks/items/useItems";
import Pagination from "../controls/Pagination";
import Products from "./Products";
import { PillStyled } from "../styles/Pill.styled";

export default function ProductsListing() {
  const [category, setCategory] = useState("mug");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(16);
  const [selectedCategory, setSelectedCategory] = useState("mug");

  // Get items
  const items = useItems();
  const categories = [
    ...new Set(items?.data?.items.map((item) => item.itemType)),
  ];

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const filteredItems = items?.data?.items?.filter(
    (item) => item.itemType === category
  );

  console.log(filteredItems);

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
        {categories?.map((category) => (
          <li>
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
        totalPosts={items?.data?.items?.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </Main>
  );
}
