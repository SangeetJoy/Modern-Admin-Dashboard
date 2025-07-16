import RouteSelect from "../RouteSelect/RouteSelect";
import SearchBar from "../SearchBar/SearchBar";
import Settings from "../Settings/Settings";

const Title = () => {
  return (
    <div className="border-b mb-4 pb-4 border-stone-300">
      <div className="flex p-0.5 rounded relative gap-2 w-full items-center">
        <img src="src/assets/orange_fire_logo.jpg" className="size-8 rounded" />
        <span>Admin Panel</span>
      </div>
    </div>
  );
};

const Sidebar = ({ isSideBarToggleClicked, onSideBarToggleClick }: any) => {
  return (
    <div
      className={`
      transition-[width] 
      duration-200 
      ease-in-out
      ${isSideBarToggleClicked ? "w-[40px]" : "w-[220px]"}
    `}
    >
      <div className="overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]">
        <Title />
        <SearchBar isSideBarToggleClicked={isSideBarToggleClicked} />
        <RouteSelect isSideBarToggleClicked={isSideBarToggleClicked} />
      </div>
      <Settings
        isSideBarToggleClicked={isSideBarToggleClicked}
        onSideBarToggleClick={onSideBarToggleClick}
      />
    </div>
  );
};

export default Sidebar;
