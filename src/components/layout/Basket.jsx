import BasketProduct from "../controls/BasketProduct";
import { BasketContainer, TotalPrice } from "../styles/Basket.styled";
import { useSelector } from "react-redux";

export default function Basket() {
  const items = useSelector((state) => state.basket.items);
  const price = items.reduce(
    (previousValue, currentValue) =>
      (previousValue =
        previousValue + currentValue.price * currentValue.cartQuantity),
    0
  );

  return (
    <BasketContainer>
      {items.map(({ added, name, price, cartQuantity }) => (
        <BasketProduct
          key={added}
          added={added}
          name={name}
          price={price}
          cartQuantity={cartQuantity}
        />
      ))}
      <TotalPrice>₺ {price.toFixed(2)}</TotalPrice>
    </BasketContainer>
  );
}
