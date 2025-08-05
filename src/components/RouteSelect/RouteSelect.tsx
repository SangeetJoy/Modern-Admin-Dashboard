import { Link, useLocation } from "react-router-dom";
import { House, Users, SquareKanban, ListChecks } from "lucide-react";

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
  { path: "/", title: "Dashboard", Icon: House },
  { path: "/board", title: "Board", Icon: SquareKanban },
  { path: "/tasks", title: "Tasks", Icon: ListChecks },
  { path: "/teams", title: "Teams", Icon: Users },
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
      <Icon size={isSideBarToggleClicked ? 22 : 18} />
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
