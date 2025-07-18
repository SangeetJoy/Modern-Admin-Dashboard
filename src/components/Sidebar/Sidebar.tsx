import RouteSelect from "../RouteSelect/RouteSelect";
import SearchBar from "../SearchBar/SearchBar";
import SideBarFooter from "../SideBarFooter/SideBarFooter";
import Settings from "../SideBarFooter/SideBarFooter";

const Title = () => {
  return (
    <div className="border-b mb-4 pb-4 border-stone-300">
      <div className="flex rounded relative gap-2 w-full items-center">
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
      <div className="overflow-y-scroll sticky top-7 h-[calc(100vh-32px-48px)]">
        <Title />
        <SearchBar isSideBarToggleClicked={isSideBarToggleClicked} />
        <RouteSelect isSideBarToggleClicked={isSideBarToggleClicked} />
      </div>
      <SideBarFooter
        isSideBarToggleClicked={isSideBarToggleClicked}
        onSideBarToggleClick={onSideBarToggleClick}
      />
    </div>
  );
};

export default Sidebar;
