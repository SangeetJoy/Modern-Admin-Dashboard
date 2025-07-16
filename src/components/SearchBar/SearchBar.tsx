import { FaSearch } from "react-icons/fa";
import RouteSelect from "../RouteSelect/RouteSelect";

const SearchBar = ({
  isSideBarToggleClicked,
}: {
  isSideBarToggleClicked: boolean;
}) => {
  return (
    <div className="bg-stone-200 mb-4 relative rounded flex items-center px-2 py-1.5 text-sm">
      {isSideBarToggleClicked ? (
        <button
          className={`flex items-center justify-start rounded gap-2 w-full px-1 py-1 text-sm bg-transparent text-stone-500 shadow-none hover:bg-stone-300/40 transition-colors duration-300 ease-in-out`}
        >
          <FaSearch className="text-sm text-stone-700" />
        </button>
      ) : (
        <>
          <FaSearch className="mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="w-full focus:outline-none bg-transparent placeholder:text-stone-400"
          />
        </>
      )}
    </div>
  );
};

export default SearchBar;
