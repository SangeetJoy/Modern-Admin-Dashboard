import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { TABLE_DATA_1 } from "../../../../data";
import { useState } from "react";
import Avatar from "../../../components/Avatar/Avatar";
import StatusBadge from "../../../components/StatusBadge/StatusBadge";
import StatusPopover from "../../../components/StatusPopover/StatusPopover";
import ProfilePopover from "../../../components/ProfilePopover/ProfilePopover";
import Filters from "../Filters/Filters";

const columns = [
  {
    accessorKey: "task",
    header: () => <span className="flex items-center">Task</span>,
    cell: (props: any) => <p>{props.getValue()}</p>,
    size: 110,
    minSize: 50,
    filterFn: "includesString",
  },
  {
    accessorKey: "assignee",
    header: () => <span className="flex items-center">Assignee</span>,
    cell: (props: any) => {
      return <ProfilePopover avatarDetails={props.getValue()} />;
    },
    size: 80,
    minSize: 50,
  },
  {
    accessorKey: "status",
    header: () => <span className="flex items-center">Status</span>,
    cell: StatusPopover,
    size: 80,
    minSize: 40,
    enableColumnFilter: true,
    filterFn: (row, columnId, filterStatuses) => {
      const status = row.getValue(columnId);
      return filterStatuses.includes(status?.id);
    },
  },
  {
    accessorKey: "due",
    header: () => <span className="flex items-center">Due</span>,
    cell: (props: any) => <p>{props.getValue()?.toLocaleTimeString()}</p>,
    size: 80,
    minSize: 40,
  },
  {
    accessorKey: "notes",
    header: () => <span className="flex items-center">Notes</span>,
    cell: (props: any) => <p>{props.getValue()}</p>,
    size: 130,
    minSize: 40,
  },
];

const CustomerTable = () => {
  const [data, setData] = useState(TABLE_DATA_1);
  const [columnFilters, setColumnFilters] = useState([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: "onChange",
    enableColumnResizing: true,
    state: {
      columnFilters,
    },
    getFilteredRowModel: getFilteredRowModel(),
    meta: {
      updateData: (rowIndex, columnId, value) =>
        setData((prev) =>
          prev.map((row, index) =>
            index === rowIndex ? { ...prev[rowIndex], [columnId]: value } : row
          )
        ),
    },
  });

  return (
    <div className="flex flex-col min-h-screen mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Filters
        columnFilters={columnFilters}
        setColumnFilters={setColumnFilters}
      />
      <div className="overflow-x-auto shadow-md rounded-lg bg-white">
        <table className="min-w-full table-fixed w-full border-collapse">
          <thead className="border-b border-gray-300">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="bg-stone-200">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="group px-6 py-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider relative"
                    style={{ width: `${header.getSize()}px` }}
                  >
                    <div>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </div>
                    <div
                      onMouseDown={header.getResizeHandler()}
                      onTouchStart={header.getResizeHandler()}
                      className={`resize absolute opacity-0 group-hover:opacity-100 top-0 right-0 h-full w-[4px] ${
                        header.column.getIsResizing()
                          ? "bg-green-500"
                          : "bg-blue-500"
                      }  cursor-col-resize select-none touch-none rounded-md transition-opacity duration-200`}
                    ></div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-stone-50">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-6 py-6 whitespace-nowrap text-sm text-gray-500"
                    style={{ width: `${cell.column.getSize()}px` }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerTable;
