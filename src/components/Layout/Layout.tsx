import { useState } from "react";
import MainArea from "../MainArea/MainArea";
import Sidebar from "../Sidebar/Sidebar";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const CollapseButton = ({ onSideBarToggleClick, isSideBarToggleClicked }) => {
  return (
    <button
      onClick={() => onSideBarToggleClick()}
      className={`text-2xl p-1.5 rounded-full bg-stone-200  hover:bg-black/70 hover:text-white transition-all duration-200 ease-in-out absolute top-60 ${
        isSideBarToggleClicked ? "left-15" : "left-58"
      }`}
    >
      {isSideBarToggleClicked ? (
        <MdKeyboardArrowRight />
      ) : (
        <MdKeyboardArrowLeft />
      )}
    </button>
  );
};

const Layout = () => {
  const [isSideBarToggleClicked, setIsSideBarToggleClicked] = useState(false);

  const onSideBarToggleClick = () => {
    setIsSideBarToggleClicked((prev) => !prev);
  };

  return (
    <div
      className={`grid grid-cols-[auto_1fr] gap-4 p-4 bg-stone-100 text-stone-950 relative`}
    >
      {/* <button
        onClick={() => onSideBarToggleClick()}
        className={`text-2xl p-1.5 rounded-full bg-stone-200  hover:bg-black/70 hover:text-white transition-all duration-200 ease-in-out absolute top-60 ${
          isSideBarToggleClicked ? "left-15" : "left-58"
        }`}
      >
        {isSideBarToggleClicked ? (
          <MdKeyboardArrowRight />
        ) : (
          <MdKeyboardArrowLeft />
        )}
      </button> */}
      <CollapseButton
        isSideBarToggleClicked={isSideBarToggleClicked}
        onSideBarToggleClick={onSideBarToggleClick}
      />
      <Sidebar isSideBarToggleClicked={isSideBarToggleClicked} />
      <MainArea
        isSideBarToggleClicked={isSideBarToggleClicked}
        onSideBarToggleClick={onSideBarToggleClick}
      />
    </div>
  );
};

export default Layout;
