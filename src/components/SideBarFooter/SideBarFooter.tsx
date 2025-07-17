import { IoMdSettings } from "react-icons/io";
import CollapseButton from "../CollapseButton/CollapseButton";
import { Link } from "react-router-dom";

interface SideBarFooterProps {
  isSideBarToggleClicked: any;
  onSideBarToggleClick: boolean;
}

const SideBarFooter = ({
  isSideBarToggleClicked,
  onSideBarToggleClick,
}: SideBarFooterProps) => {
  return (
    <div className="sticky top-[calc(100vh_-_48px_-_16px)] border-t border-stone-300">
      <Link
        to="/settings"
        className={`mt-2 flex items-center rounded gap-2 w-full px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] hover:bg-stone-200 bg-transparent text-stone-500 shadow-none`}
      >
        <IoMdSettings
          className={isSideBarToggleClicked ? "text-2xl" : "text-sm"}
        />
        {!isSideBarToggleClicked && <span>Settings</span>}
      </Link>
      <CollapseButton
        onSideBarToggleClick={onSideBarToggleClick}
        isSideBarToggleClicked={isSideBarToggleClicked}
      />
    </div>
  );
};

export default SideBarFooter;
