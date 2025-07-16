import { MdKeyboardArrowLeft } from "react-icons/md";

const MainArea = ({ onSideBarToggleClick }: any) => {
  return (
    <div className="bg-white rounded-lg shadow pb-4 h-[200vh] ">
      {/* <button
        onClick={() => onSideBarToggleClick(true)}
        className="text-2xl p-1.5 rounded-full bg-stone-200  hover:bg-black/70 hover:text-white transition-colors duration-300 ease-in-out absolute top-60 left-59"
      >
        <MdKeyboardArrowLeft />
      </button> */}
    </div>
  );
};

export default MainArea;
