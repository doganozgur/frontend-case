import { useEffect, useState } from "react";
import { Icon } from "../../Icons";
import { getWindowSize } from "../../utils";
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
  const [windowWidth, setWindowWidth] = useState(getWindowSize());

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowSize());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  console.log(windowWidth.width);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
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
        {pageNumbers
          ?.slice(0, windowWidth.width > 768 ? 4 : 2)
          .map((number, i) => (
            <ListItem
              key={i}
              isActive={number === currentPage}
              onClick={() => paginate(number)}
            >
              {number}
            </ListItem>
          ))}{" "}
        <ListItem>...</ListItem>{" "}
        {pageNumbers
          ?.slice(windowWidth.width > 768 ? -4 : -2)
          .map((number, i) => (
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
