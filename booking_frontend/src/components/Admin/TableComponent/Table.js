import React from "react";
import TableHeader from "./TableHeader.js";
import TableRow from "./TableRow.js";
import Pagination from "./Pagination.js";
import { Link } from "react-router-dom";

const Table = ({
  title,
  data,
  columns,
  pageSize,
  linkToAdd,
  handleEdit,
  handleDelete,
  handleDetails,
  hideAction = true,
}) => {
  // State to manage current page
  const [currentPage, setCurrentPage] = React.useState(1);

  // Paginate data based on currentPage
  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="px-5 mb-5 flex items-center justify-between">
        <h4 className="mb-6 text-xl font-bold text-black dark:text-white">
          {title}
        </h4>
        {linkToAdd && (
          <Link to={linkToAdd} className="btn btn-sm btn-primary">
            Add New
          </Link>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-100 dark:bg-strokemedium">
          <TableHeader hideAction={hideAction} columns={columns} />
          <tbody>
            {currentData.map((item, index) => (
              <TableRow
                key={index}
                item={item}
                columns={columns}
                hideAction={hideAction}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                handleDetails={handleDetails}
              />
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        pageSize={pageSize}
        totalItems={data.length}
        totalPages={Math.ceil(data.length / pageSize)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Table;
