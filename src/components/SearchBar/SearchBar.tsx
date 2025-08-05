import { Search } from "lucide-react";

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
          <Search className="text-sm text-stone-700" />
        </button>
      ) : (
        <>
          <Search className="mr-2" size={16} />
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
