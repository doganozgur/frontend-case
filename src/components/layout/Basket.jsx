import BasketProduct from "../controls/BasketProduct";
import { BasketContainer, TotalPrice } from "../styles/Basket.styled";
import { useSelector } from "react-redux";

export default function Basket() {
  const items = useSelector((state) => state.basket.items);
  const price = items.reduce((a, v) => (a = a + v.price), 0);
  console.log(items);

  return (
    <BasketContainer>
      {items.map(({ name, price }) => (
        <BasketProduct name={name} price={price} />
      ))}
      <TotalPrice>₺ {price.toFixed(2)}</TotalPrice>
    </BasketContainer>
  );
}
