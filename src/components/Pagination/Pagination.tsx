import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Pagination = ({ table }: any) => {
  return (
    <div className="flex items-center gap-4 p-4 mt-2">
      <button
        className="rounded-md border border-gray-300 p-2.5 text-center text-sm text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <FiChevronLeft className="w-4 h-4" />
      </button>

      <span className="text-gray-600 text-sm">
        Page{" "}
        <strong className="text-gray-800">
          {table.getState().pagination.pageIndex + 1}
        </strong>{" "}
        of <strong className="text-gray-800">{table.getPageCount()}</strong>
      </span>

      <button
        className="rounded-md border border-gray-300 p-2.5 text-center text-sm text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
        // disabled={current === total}
      >
        <FiChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Pagination;
