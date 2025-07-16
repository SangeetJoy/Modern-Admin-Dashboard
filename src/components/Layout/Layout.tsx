import { useState } from "react";
import MainArea from "../MainArea/MainArea";
import Sidebar from "../Sidebar/Sidebar";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Layout = () => {
  const [isSideBarToggleClicked, setIsSideBarToggleClicked] = useState(false);

  const onSideBarToggleClick = () => {
    setIsSideBarToggleClicked((prev) => !prev);
  };

  return (
    <div
      className={`grid gap-4 ${
        isSideBarToggleClicked
          ? "grid-cols-[40px_1fr]"
          : "grid-cols-[220px_1fr]"
      }  p-4 bg-stone-100 text-stone-950`}
    >
      <button
        onClick={() => onSideBarToggleClick()}
        className={`text-2xl p-1.5 rounded-full bg-stone-200  hover:bg-black/70 hover:text-white transition-colors duration-300 ease-in-out absolute top-60 ${
          isSideBarToggleClicked ? "left-12" : "left-58"
        }`}
      >
        {isSideBarToggleClicked ? (
          <MdKeyboardArrowRight />
        ) : (
          <MdKeyboardArrowLeft />
        )}
      </button>
      <Sidebar isSideBarToggleClicked={isSideBarToggleClicked} />
      <MainArea
        isSideBarToggleClicked={isSideBarToggleClicked}
        onSideBarToggleClick={onSideBarToggleClick}
      />
    </div>
  );
};

export default Layout;
