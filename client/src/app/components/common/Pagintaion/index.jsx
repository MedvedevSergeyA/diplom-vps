import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  return (
    <nav>
      <ul className="inline-flex items-center -space-x-px">
        {pages.map((page) => (
          <li key={"page_" + page} onClick={() => onPageChange(page)}>
            <button
              className={`rounded-[50%] mr-4 px-3 py-2 leading-tight text-black bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white ${
                page === currentPage
                  ? "bg-blue-100 text-white dark:bg-indigo-300"
                  : ""
              }`}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number
};

export default Pagination;
