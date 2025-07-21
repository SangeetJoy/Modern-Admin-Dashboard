import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { TABLE_DATA_1 } from "../../../../data";
import { useState } from "react";
import Avatar from "../../../components/Avatar/Avatar";
import StatusBadge from "../../../components/StatusBadge/StatusBadge";
import StatusPopover from "../../../components/StatusPopover/StatusPopover";
import ProfilePopover from "../../../components/ProfilePopover/ProfilePopover";
import Filters from "../Filters/Filters";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutput } from "react-icons/md";
import { FaSort } from "react-icons/fa";

const SelectedStatusSummary = ({ selectedStatuses }) => {
  if (!selectedStatuses.length) return null;

  return (
    <div className="flex items-center gap-2 text-sm text-stone-600 mt-2 ml-1 mb-2">
      <FaCheckCircle className="text-green-600 text-xs" />
      <span className="font-medium">Filters Applied:</span>

      <div className="flex flex-wrap gap-1">
        {selectedStatuses.map((status) => (
          <span
            key={status}
            className={`
              px-2 py-0.5 rounded-full text-xs font-medium
              ${
                status.toLowerCase() === "in progress"
                  ? "bg-yellow-100 text-yellow-800"
                  : status.toLowerCase() === "done"
                  ? "bg-green-100 text-green-800"
                  : status.toLowerCase() === "in review"
                  ? "bg-blue-100 text-blue-800"
                  : status.toLowerCase() === "blocked"
                  ? "bg-red-100 text-red-800"
                  : "bg-stone-100 text-stone-700"
              }
            `}
          >
            {status}
          </span>
        ))}
      </div>
    </div>
  );
};

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
      if (filterStatuses.length === 0) return true;
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

const TasksTable = () => {
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
    getSortedRowModel: getSortedRowModel(),
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

  const filterStatuses =
    columnFilters.find((filter) => filter.id === "status")?.value || [];

  const idToName = new Map<number, string>(
    TABLE_DATA_1.map((item) => [
      item.status.id,
      item.status.name.toLowerCase().replace(/\s+/g, ""),
    ])
  );

  const finalArray = filterStatuses.map((id) => idToName.get(id) || []);

  console.log({ filterStatuses, finalArray, idToName });

  // console.log({ selectedFilterStatuses });

  return (
    <div className="flex flex-col min-h-screen mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Filters
        columnFilters={columnFilters}
        setColumnFilters={setColumnFilters}
      />
      {Boolean(filterStatuses.length) && (
        <SelectedStatusSummary selectedStatuses={finalArray} />
      )}
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
                    <div className="flex items-center gap-2">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {header.column.getCanSort() && (
                        <FaSort
                          onClick={header.column.getToggleSortingHandler()}
                          size={13}
                          className="hover:text-stone-800"
                        />
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

export default TasksTable;
