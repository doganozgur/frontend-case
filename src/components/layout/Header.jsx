import Logo from "../../assets/logo.svg";
import { Container } from "../styles/Container.styled";
import { StyledHeader } from "../styles/Header.styled";
import { Nav } from "../styles/Header.styled";
import { Checkout } from "../styles/Checkout.styled";
import { Icon } from "../../Icons";
import { useSelector } from "react-redux";

const Header = () => {
  const items = useSelector((state) => state.basket.items);
  const price = items.reduce((a, v) => (a = a + v.price), 0);

  return (
    <StyledHeader>
      <Container>
        <Nav>
          <img src={Logo} alt="Logo" />
          <Checkout>
            <Icon name="bag" width="13" height="16" /> ₺ {price.toFixed(2)}
          </Checkout>
        </Nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
