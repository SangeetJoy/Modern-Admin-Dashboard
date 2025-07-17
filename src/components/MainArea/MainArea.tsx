import { Outlet } from "react-router-dom";

const MainArea = () => {
  return (
    <div className="bg-white rounded-lg shadow pb-4 h-[200vh] ">
      <Outlet />
    </div>
  );
};

export default MainArea;
