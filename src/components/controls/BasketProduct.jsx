import { Price } from "../styles/Basket.styled";
import { Product } from "../styles/Basket.styled";
import ProductCounter from "./ProductCounter";

export default function BasketProduct({ added, name, price, cartQuantity }) {
  return (
    <Product>
      <div>
        <p>{name}</p>
        <Price>₺ {price}</Price>
      </div>
      <ProductCounter cartQuantity={cartQuantity} added={added} />
    </Product>
  );
}
