import React from "react";

const MenuItem = ({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center w-full text-sm px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
    >
      <span className="w-4 h-4 mr-2">{icon}</span>
      <span>{label}</span>
    </button>
  );
};

export default MenuItem;
