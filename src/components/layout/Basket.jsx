import BasketProduct from "../controls/BasketProduct";
import { BasketContainer, Price, TotalPrice } from "../styles/Basket.styled";

export default function Basket() {
  return (
    <BasketContainer>
      <BasketProduct />
      <BasketProduct />
      <BasketProduct />
      <TotalPrice>₺ 39,97</TotalPrice>
    </BasketContainer>
  );
}
