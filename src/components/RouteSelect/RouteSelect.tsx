import { FaHome } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { FaFileInvoice } from "react-icons/fa6";
import { FaMoneyCheckAlt } from "react-icons/fa";

interface RouteProps {
  selected: boolean;
  Icon: any;
  title: string;
  isSideBarToggleClicked: boolean;
}

const Route = ({
  selected,
  Icon,
  title,
  isSideBarToggleClicked,
}: RouteProps) => {
  return (
    <button
      className={`flex items-center justify-start rounded gap-2 w-full px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] ${
        selected
          ? "bg-white text-stone-950 shadow"
          : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
      }`}
    >
      <Icon className={isSideBarToggleClicked ? "text-xl " : "text-base"} />
      {!isSideBarToggleClicked && <span>{title}</span>}
    </button>
  );
};

const RouteSelect = ({ isSideBarToggleClicked }: any) => {
  return (
    <div className="space-y-1">
      <Route
        selected={true}
        Icon={FaHome}
        title="Dashboard"
        isSideBarToggleClicked={isSideBarToggleClicked}
      />
      <Route
        selected={false}
        Icon={RiTeamFill}
        title="Team"
        isSideBarToggleClicked={isSideBarToggleClicked}
      />
      <Route
        selected={false}
        Icon={FaFileInvoice}
        title="Invoices"
        isSideBarToggleClicked={isSideBarToggleClicked}
      />
      <Route
        selected={false}
        Icon={FaMoneyCheckAlt}
        title="Finance"
        isSideBarToggleClicked={isSideBarToggleClicked}
      />
    </div>
  );
};

export default RouteSelect;
