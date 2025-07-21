import { FaSearch } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import Popover from "../../../components/Popover/Popover";
import MenuItem from "../../../components/MenuItem/MenuItem";
import { STATUSES } from "../../../../data";
import { StatusIconMap } from "../../../components/StatusPopover/StatusPopover";
import { FaCheck } from "react-icons/fa6";

const StatusFilterButton = () => {
  return (
    <button
      className="
        flex items-center gap-2
        px-4
        h-10
        rounded-lg
        border border-stone-300
        bg-white
        text-sm text-stone-700
        shadow-sm
        hover:bg-stone-100
        transition
        whitespace-nowrap
      "
    >
      Status
      <FiChevronDown className="text-stone-500 text-base" />
    </button>
  );
};

const SearchFilter = ({ onSearchFilterChange, searchFilterValue }) => {
  return (
    <div
      className="
      flex items-center 
      h-10
      rounded-lg 
      px-3 
      shadow-sm 
      focus-within:ring-2 
      focus-within:ring-stone-600 
      w-72 
      border border-stone-300
      bg-white
    "
    >
      <FaSearch className="mr-2 text-stone-500 text-sm" />
      <input
        type="text"
        placeholder="Search tasks..."
        className="outline-none bg-transparent text-sm placeholder-gray-400 w-full"
        onChange={(e) => onSearchFilterChange("task", e.target.value)}
        value={searchFilterValue}
      />
    </div>
  );
};

const Filters = ({ setColumnFilters, columnFilters }) => {
  const searchFilterValue =
    columnFilters.find((filter) => filter.id === "task")?.value || "";

  const filterStatuses =
    columnFilters.find((filter) => filter.id === "status")?.value || [];

  const onSearchFilterChange = (id, value) => {
    setColumnFilters((prev) => [
      ...prev.filter((f) => f.id !== id),
      { id, value },
    ]);
  };

  const onStatusFilterClick = (statusId, isActive) => {
    setColumnFilters((prev) => {
      const statuses = prev.find((filter) => filter.id === "status")?.value;

      if (!statuses) {
        return [...prev, { id: "status", value: [statusId] }];
      }

      return prev.map((filter) =>
        filter.id === "status"
          ? {
              ...filter,
              value: isActive
                ? statuses.filter((statusFilter) => statusFilter !== statusId)
                : [...statuses, statusId],
            }
          : filter
      );
    });
  };

  console.log({ columnFilters });

  return (
    <div className="flex gap-3 mb-5">
      <SearchFilter
        onSearchFilterChange={onSearchFilterChange}
        searchFilterValue={searchFilterValue}
      />
      <Popover trigger={<StatusFilterButton />}>
        {STATUSES.map((status) => (
          <div className="px-3 py-1.5 flex items-center my-1">
            <MenuItem
              key={status.id}
              icon={StatusIconMap[status.name.toLowerCase()].icon}
              label={status.name}
              onClick={() =>
                onStatusFilterClick(
                  status.id,
                  filterStatuses.includes(status.id)
                )
              }
            />
            {filterStatuses.includes(status.id) && (
              <FaCheck className="mr-1" color="green" />
            )}
          </div>
        ))}
      </Popover>
    </div>
  );
};

export default Filters;
