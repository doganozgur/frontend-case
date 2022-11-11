import React, { useState } from "react";
import Pill from "../controls/Pill";
import { Main, PillHolder, Title } from "../styles/ProductsListing";
import { useItems } from "../../hooks/items/useItems";
import Pagination from "../controls/Pagination";
import Products from "./Products";

export default function ProductsListing() {
  const [active] = useState("active");
  // const [currentProducts, setCurrentProducts] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(16);

  // Get items
  const items = useItems();

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentProducts = items?.data?.items?.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Main>
      <Title>Products</Title>
      {/* Filter by category */}
      <PillHolder>
        <li>
          <Pill label="Mug" active={active} />
        </li>
        <li>
          <Pill label="Shirt" />
        </li>
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
