import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPaginationItems = () => {
    const items = [];
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, startPage + 4);

    for (let page = startPage; page <= endPage; page++) {
      items.push(
        <li key={page}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onPageChange(page);
            }}
            className={`flex items-center justify-center rounded px-3 py-1.5 font-medium hover:bg-primary hover:text-white ${
              page === currentPage
                ? "bg-primary text-white"
                : "bg-[#EDEFF1] text-black dark:bg-graydark dark:text-white dark:hover:bg-primary dark:hover:text-white"
            }`}
          >
            {page}
          </a>
        </li>
      );
    }

    return items;
  };

  return (
    <div className="flex items-center justify-center p-4 sm:p-6 xl:p-7.5">
      <nav>
        <ul className="flex flex-wrap items-center gap-2">
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onPageChange(currentPage - 1);
              }}
              className={`flex items-center justify-center rounded bg-[#EDEFF1] px-3 py-1.5 text-xs font-medium text-black hover:bg-primary hover:text-white dark:bg-graydark dark:text-white dark:hover:bg-primary dark:hover:text-white ${
                currentPage === 1 ? "pointer-events-none opacity-50" : ""
              }`}
            >
              Previous
            </a>
          </li>
          {renderPaginationItems()} {/* Render pagination items */}
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onPageChange(currentPage + 1);
              }}
              className={`flex items-center justify-center rounded bg-[#EDEFF1] px-3 py-1.5 text-xs font-medium text-black hover:bg-primary hover:text-white dark:bg-graydark dark:text-white dark:hover:bg-primary dark:hover:text-white ${
                currentPage === totalPages
                  ? "pointer-events-none opacity-50"
                  : ""
              }`}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
