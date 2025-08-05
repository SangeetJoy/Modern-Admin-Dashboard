import Popover from "../../../components/Popover/Popover";
import MenuItem from "../../../components/MenuItem/MenuItem";
import { STATUSES } from "../../../../data";
import { StatusIconMap } from "../../../components/StatusPopover/StatusPopover";
import { Search, Funnel, Check, ChevronDown } from "lucide-react";
import type { ColumnFiltersState } from "@tanstack/react-table";
import type { FC } from "react";

type FiltersProps = {
  setColumnFilters: React.Dispatch<React.SetStateAction<ColumnFiltersState>>;
  columnFilters: ColumnFiltersState;
};

type SearchFilterProps = {
  onSearchFilterChange: (id: string, value: string) => void;
  searchFilterValue: string;
};

const StatusFilterButton: FC = () => {
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
      <ChevronDown className="text-stone-500 text-base" size={18} />
    </button>
  );
};

const SearchFilter: FC<SearchFilterProps> = ({
  onSearchFilterChange,
  searchFilterValue,
}) => {
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
      <Search className="mr-2 text-stone-500 text-sm" size={18} />
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

const Filters: FC<FiltersProps> = ({ setColumnFilters, columnFilters }) => {
  const searchFilterValue =
    (columnFilters.find((filter) => filter.id === "task")?.value as string) ||
    "";

  const filterStatuses =
    (columnFilters.find((filter) => filter.id === "status")?.value as
      | number[]
      | undefined) || [];

  const onSearchFilterChange = (id: string, value: string) => {
    setColumnFilters((prev) => [
      ...prev.filter((f) => f.id !== id),
      { id, value },
    ]);
  };

  const onStatusFilterClick = (statusId: number, isActive: boolean) => {
    setColumnFilters((prev) => {
      const statuses =
        (prev.find((filter) => filter.id === "status")?.value as
          | number[]
          | undefined) || [];

      const updatedStatuses = isActive
        ? statuses.filter((s) => s !== statusId)
        : [...statuses, statusId];

      return [
        ...prev.filter((f) => f.id !== "status"),
        { id: "status", value: updatedStatuses },
      ];
    });
  };

  return (
    <div className="flex gap-3 mb-5 items-center">
      <SearchFilter
        onSearchFilterChange={onSearchFilterChange}
        searchFilterValue={searchFilterValue}
      />
      <Popover trigger={<StatusFilterButton />}>
        {STATUSES.map((status) => (
          <div key={status.id} className="px-3 py-1.5 flex items-center my-1">
            <MenuItem
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
              <Check className="mr-1" color="green" />
            )}
          </div>
        ))}
      </Popover>
      <Funnel size={20} />
    </div>
  );
};

export default Filters;
