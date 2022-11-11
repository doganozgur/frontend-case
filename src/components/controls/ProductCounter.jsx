import { Icon } from "../../Icons";
import { Counter, Number } from "../styles/ProductCounter.styled";
import { useDispatch } from "react-redux";
import { addToBasket, decreaseQuantity } from "../../features/basketSlice";
import { useSelector } from "react-redux";

export default function ProductCounter({ added, cartQuantity }) {
  const dispatch = useDispatch();

  // Increase item quantity
  const incrementQuantity = () => {
    dispatch(addToBasket({ added }));
  };

  // Decrease item quantity
  const decrementQuantity = () => {
    dispatch(decreaseQuantity({ added }));
  };

  return (
    <Counter>
      <button onClick={decrementQuantity}>
        <Icon name="minus" />
      </button>
      <Number>{cartQuantity}</Number>
      <button onClick={incrementQuantity}>
        <Icon name="plus" />
      </button>
    </Counter>
  );
}
