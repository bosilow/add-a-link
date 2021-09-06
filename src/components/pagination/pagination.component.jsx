import "./pagination.styles.scss";

import { useState } from "react";
import { Link } from "react-router-dom";

const Pagination = ({ linksPerPage, totalLinks, paginate }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalLinks / linksPerPage); i++) {
    pageNumbers.push(i);
  }

  const addActiveClass = (num) => {
    const pageLinks = document.querySelectorAll(".page-link");
    for (let i = 0; i < pageLinks.length; i++) {
      pageLinks[i].classList.remove("active-link");
    }
    document
      .querySelectorAll(".page-link")
      [num - 1].classList.add("active-link");
  };

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.includes(currentPage - 1) && (
          <Link
            onClick={() => {
              setCurrentPage(currentPage - 1);
              paginate(currentPage - 1);
              addActiveClass(currentPage - 1);
            }}
            to="/"
            className="page-nav-link"
          >
            &lt;
          </Link>
        )}
        {pageNumbers.map((number) => (
          <li key={number}>
            <Link
              onClick={() => {
                paginate(number);
                setCurrentPage(number);
                addActiveClass(number);
              }}
              to="/"
              className="page-link"
            >
              {number}
            </Link>
          </li>
        ))}
        {pageNumbers.includes(currentPage + 1) && (
          <Link
            onClick={() => {
              setCurrentPage(currentPage + 1);
              paginate(currentPage + 1);
              addActiveClass(currentPage + 1);
            }}
            to="/"
            className="page-nav-link"
          >
            &gt;
          </Link>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
