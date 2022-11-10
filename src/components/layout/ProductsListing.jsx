import React, { useState } from "react";
import Pill from "../controls/Pill";
import {
  Main,
  PillHolder,
  ProductsCard,
  Title,
} from "../styles/ProductsListing";
import Product from "./Product";
import { useItems } from "../../hooks/items/useItems";

export default function ProductsListing() {
  const [active, setActive] = useState("active");

  // Get items
  const items = useItems();

  console.log(items);

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
      <ProductsCard>
        {items ? (
          items?.data?.items
            ?.slice(0, 16)
            .map((item) => <Product key={item?.added} productInfo={item} />)
        ) : (
          <div>Loading...</div>
        )}
      </ProductsCard>
    </Main>
  );
}
