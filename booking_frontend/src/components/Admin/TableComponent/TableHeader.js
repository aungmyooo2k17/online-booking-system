import React from "react";

const TableHeader = ({ hideAction, columns }) => (
  <>
    <thead>
      <tr className="rounded-sm bg-gray-2 dark:bg-meta-4">
        {columns.map((column, index) => (
          <th key={index} className="px-2.5 xl:px-5 py-2.5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              {column.label}
            </h5>
          </th>
        ))}
        {!hideAction && (
          <th className="px-2.5 xl:px-5 py-2.5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Action
            </h5>
          </th>
        )}
      </tr>
    </thead>
  </>
);

export default TableHeader;
