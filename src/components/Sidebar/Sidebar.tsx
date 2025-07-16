import RouteSelect from "../RouteSelect/RouteSelect";
import SearchBar from "../SearchBar/SearchBar";

const Title = () => {
  return <div className="border-b mb-4 pb-4 border-stone-300"></div>;
};

const Sidebar = ({ isSideBarToggleClicked }: any) => {
  return (
    <div className="sidebar overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]">
      <Title />
      <SearchBar isSideBarToggleClicked={isSideBarToggleClicked} />
      <RouteSelect isSideBarToggleClicked={isSideBarToggleClicked} />
    </div>
  );
};

export default Sidebar;
