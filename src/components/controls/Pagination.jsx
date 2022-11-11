import { useState } from "react";
import { Icon } from "../../Icons";
import {
  ListItem,
  Navigate,
  PaginationList,
  PaginationWrapper,
} from "../styles/Pagination.styled";

export default function Pagination({
  itemsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) {
  
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);
  return (
    <PaginationWrapper>
      <Navigate
        type="prev"
        onClick={() =>
          paginate(currentPage > 1 ? currentPage - 1 : currentPage)
        }
      >
        <Icon name="arrowLeft" /> Prev
      </Navigate>
      <PaginationList>
        {pageNumbers?.slice(0, 4).map((number, i) => (
          <ListItem
            key={i}
            isActive={number === currentPage}
            onClick={() => paginate(number)}
          >
            {number}
          </ListItem>
        ))}{" "}
        <ListItem>...</ListItem>{" "}
        {pageNumbers?.slice(-4).map((number, i) => (
          <ListItem
            key={i}
            isActive={number === currentPage}
            onClick={() => paginate(number)}
          >
            {number}
          </ListItem>
        ))}
      </PaginationList>
      <Navigate
        type="next"
        onClick={() =>
          paginate(
            currentPage < pageNumbers.length ? currentPage + 1 : currentPage
          )
        }
      >
        Next <Icon name="arrowRight" />
      </Navigate>
    </PaginationWrapper>
  );
}
