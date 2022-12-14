import Header from "./components/layout/Header";
import Sorting from "./components/layout/Sorting";
import Filter from "./components/layout/Filter";
import Basket from "./components/layout/Basket";
import { StyledApp } from "./components/styles/App.styled";
import { Container } from "./components/styles/Container.styled";
import { Column } from "./components/styles/Column";
import Footer from "./components/layout/Footer";
import ProductsListing from "./components/layout/ProductsListing";

function App() {
  return (
    <>
      <Header />
      <Container>
        <StyledApp>
          {/* Filtering */}
          <Column>
            <Sorting />
            <Filter title="Brands" />
            <Filter title="Tags" />
          </Column>
          {/* Products listing */}
          <ProductsListing />
          {/* Basket */}
          <Basket />
        </StyledApp>
        <Footer />
      </Container>
    </>
  );
}

export default App;
