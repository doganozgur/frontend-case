import React from "react";
import { Button } from "../styles/Button.styled";
import {
  ProductStyled,
  ImageContainer,
  Image,
  Price,
  Title,
} from "../styles/Product.styled";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../features/basketSlice";

export default function Product({ productInfo }) {
  const dispatch = useDispatch();

  const { added, name, price } = productInfo;

  const addItemToBasket = () => {
    const product = {
      added,
      name,
      price,
    };
    dispatch(addToBasket(product));
  };

  return (
    <ProductStyled>
      <ImageContainer>
        <Image src="https://via.placeholder.com/150" alt="" />
      </ImageContainer>
      <Price>₺ {price}</Price>
      <Title>{name}</Title>
      <Button variant="wide" onClick={addItemToBasket}>
        Add
      </Button>
    </ProductStyled>
  );
}
