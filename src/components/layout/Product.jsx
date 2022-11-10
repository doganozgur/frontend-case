import React from "react";
import { Button } from "../styles/Button.styled";
import {
  ProductStyled,
  ImageContainer,
  Image,
  Price,
  Title,
} from "../styles/Product.styled";

export default function Product({ productInfo }) {
  const { price, name } = productInfo;
  return (
    <ProductStyled>
      <ImageContainer>
        <Image src="https://via.placeholder.com/150" alt="" />
      </ImageContainer>
      <Price>₺ {price}</Price>
      <Title>{name}</Title>
      <Button variant="wide">Add</Button>
    </ProductStyled>
  );
}
