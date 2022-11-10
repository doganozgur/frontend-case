import { ProductsCard } from "../styles/ProductsListing";
import Product from "./Product";

export default function Products({ products }) {
  return (
    <ProductsCard>
      {products?.map((item) => (
        <Product key={item?.added} productInfo={item} />
      ))}
    </ProductsCard>
  );
}
