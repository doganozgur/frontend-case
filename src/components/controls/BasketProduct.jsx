import { Price } from "../styles/Basket.styled";
import { Product } from "../styles/Basket.styled";
import ProductCounter from "./ProductCounter";

export default function BasketProduct() {
  return (
    <Product>
      <div>
        <p>Example Product</p>
        <Price>₺14,99</Price>
      </div>
      <ProductCounter />
    </Product>
  );
}
