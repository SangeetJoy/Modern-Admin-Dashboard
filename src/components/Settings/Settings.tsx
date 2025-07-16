import { IoMdSettings } from "react-icons/io";
import CollapseButton from "../CollapseButton/CollapseButton";

interface SettingsProps {
  isSideBarToggleClicked: any;
  onSideBarToggleClick: boolean;
}

const Settings = ({
  isSideBarToggleClicked,
  onSideBarToggleClick,
}: SettingsProps) => {
  return (
    <div className="sticky top-[calc(100vh_-_48px_-_16px)] border-t border-stone-300">
      <button
        className={`mt-2 flex items-center rounded gap-2 w-full px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] hover:bg-stone-200 bg-transparent text-stone-500 shadow-none`}
      >
        <IoMdSettings
          className={isSideBarToggleClicked ? "text-2xl" : "text-sm"}
        />
        {!isSideBarToggleClicked && <span>Settings</span>}
      </button>
      <CollapseButton
        onSideBarToggleClick={onSideBarToggleClick}
        isSideBarToggleClicked={isSideBarToggleClicked}
      />
    </div>
  );
};

export default Settings;
