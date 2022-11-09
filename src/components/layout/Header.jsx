import Logo from "../../assets/logo.svg";
import { Container } from "../styles/Container.styled";
import { StyledHeader } from "../styles/Header.styled";
import { Nav } from "../styles/Header.styled";
import { Checkout } from "../styles/Checkout.styled";
import { Icon } from "../../Icons";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <img src={Logo} alt="Logo" />
          <Checkout>
            <Icon name="bag" width="13" height="16" /> ₺ 39,97
          </Checkout>
        </Nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
