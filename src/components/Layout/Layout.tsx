import { useState } from "react";
import MainArea from "../MainArea/MainArea";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
  const [isSideBarToggleClicked, setIsSideBarToggleClicked] = useState(false);

  const onSideBarToggleClick = () => {
    setIsSideBarToggleClicked((prev) => !prev);
  };

  return (
    <div
      className={`grid grid-cols-[auto_1fr] gap-4 p-4 bg-stone-100 text-stone-950 relative`}
    >
      <Sidebar
        isSideBarToggleClicked={isSideBarToggleClicked}
        onSideBarToggleClick={onSideBarToggleClick}
      />
      <MainArea />
    </div>
  );
};

export default Layout;
