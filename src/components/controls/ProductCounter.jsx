import { Icon } from "../../Icons";
import { Counter, Number } from "../styles/ProductCounter.styled";

export default function ProductCounter() {
  return (
    <Counter>
      <button>
        <Icon name="minus" />
      </button>
      <Number>1</Number>
      <button>
        <Icon name="plus" />
      </button>
    </Counter>
  );
}
