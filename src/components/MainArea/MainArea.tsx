import { Outlet } from "react-router-dom";

const MainArea = () => {
  return (
    <div className="bg-white rounded-lg shadow pb-4">
      <Outlet />
    </div>
  );
};

export default MainArea;
