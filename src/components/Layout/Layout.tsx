import { useState } from "react";
import MainArea from "../MainArea/MainArea";
import Sidebar from "../Sidebar/Sidebar";
import CollapseButton from "../CollapseButton/CollapseButton";

const Layout = () => {
  const [isSideBarToggleClicked, setIsSideBarToggleClicked] = useState(false);

  const onSideBarToggleClick = () => {
    setIsSideBarToggleClicked((prev) => !prev);
  };

  return (
    <div
      className={`grid grid-cols-[auto_1fr] gap-4 p-4 bg-stone-100 text-stone-950 relative`}
    >
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
