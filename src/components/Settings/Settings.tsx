import { IoMdSettings } from "react-icons/io";

interface SettingsProps {
  isSideBarToggleClicked: any;
}

const Settings = ({ isSideBarToggleClicked }: SettingsProps) => {
  return (
    <div className="sticky top-[calc(100vh_-_48px_-_16px)] border-t border-stone-300 hover:border-none">
      <button
        className={`mt-2 flex items-center rounded gap-2 w-full px-2 py-1.5 text-1xl transition-[box-shadow,_background-color,_color] hover:bg-stone-200 bg-transparent text-stone-500 shadow-none`}
      >
        <IoMdSettings
          className={isSideBarToggleClicked ? "text-2xl" : "text-xl"}
        />
        {!isSideBarToggleClicked && <span>Settings</span>}
      </button>
    </div>
  );
};

export default Settings;
