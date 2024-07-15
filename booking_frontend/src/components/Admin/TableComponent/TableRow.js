import React, { useState } from "react";
import Action from "./Action";

const TableRow = ({
  item,
  columns,
  handleEdit,
  handleDelete,
  handleDetails,
}) => {
  return (
    <tr className="border-b border-stroke dark:border-strokedark">
      {columns.map((column, index) => (
        <td key={index} className="px-2.5 xl:px-5 py-4.5 text-center">
          <p
            className={`font-medium ${
              column.type === "number"
                ? "text-meta-3"
                : "text-black dark:text-white"
            }`}
          >
            {item[column.key]}
          </p>
        </td>
      ))}
      <td className="px-2.5 xl:px-5 py-2.5">
        <Action
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleDetails={handleDetails}
        />
      </td>
    </tr>
  );
};

export default TableRow;
