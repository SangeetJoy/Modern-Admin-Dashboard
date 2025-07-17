const TopBar = () => {
  return (
    <div className="border-b px-4 mb-4 mt-1 pb-2 border-stone-200">
      <div className="p-0.5 flex items-center justify-between">
        <div className="py-1">
          <span className="text-sm font-bold block">
            {" "}
            🚀 Good Morning, Joy!
          </span>
          <span className="text-xs block text-stone-500">
            Tuesday, July 17th 2025
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
