import { FaHome } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { FaFileInvoice } from "react-icons/fa6";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { BsFillKanbanFill } from "react-icons/bs";
import { FaTasks } from "react-icons/fa";

interface RouteProps {
  selected: boolean;
  Icon: any;
  title: string;
  isSideBarToggleClicked: boolean;
  path: string;
}

interface RouteConfig {
  path: string;
  title: string;
  Icon: any;
}

const routesConfig: RouteConfig[] = [
  { path: "/", title: "Dashboard", Icon: FaHome },
  { path: "/tasks", title: "Tasks", Icon: FaTasks },
  { path: "/teams", title: "Teams", Icon: RiTeamFill },
  { path: "/board", title: "Board", Icon: BsFillKanbanFill },
];

const RouteItem = ({
  selected,
  Icon,
  title,
  isSideBarToggleClicked,
  path,
}: RouteProps) => {
  return (
    <Link
      className={`flex items-center justify-start rounded gap-2 w-full px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] ${
        selected
          ? "bg-white text-stone-950 shadow"
          : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
      }`}
      to={path}
    >
      <Icon className={isSideBarToggleClicked ? "text-xl " : "text-base"} />
      {!isSideBarToggleClicked && <span>{title}</span>}
    </Link>
  );
};

const RouteSelect = ({
  isSideBarToggleClicked,
}: {
  isSideBarToggleClicked: boolean;
}) => {
  const location = useLocation();

  return (
    <div className="space-y-1">
      {routesConfig.map(({ path, title, Icon }) => (
        <RouteItem
          key={path}
          selected={location.pathname === path}
          Icon={Icon}
          title={title}
          isSideBarToggleClicked={isSideBarToggleClicked}
          path={path}
        />
      ))}
    </div>
  );
};

export default RouteSelect;
