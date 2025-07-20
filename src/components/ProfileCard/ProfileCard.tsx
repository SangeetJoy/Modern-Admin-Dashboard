import { FaRegHandPaper } from "react-icons/fa";

const ProfileCard = ({ name, role, email, imageUrl }: any) => {
  return (
    <div className=" bg-white/80 backdrop-blur-md rounded-md shadow-xl p-4 w-72 border border-gray-200 transition-all duration-200 hover:scale-105">
      <div className="flex flex-col items-center">
        <img
          src={imageUrl}
          alt="avatar"
          className="w-20 h-20 rounded-full shadow-md mb-3 border-2 border-white"
        />
        <p className="font-bold text-gray-800 text-lg flex items-center gap-1">
          {name}
          <FaRegHandPaper className="text-yellow-500 animate-wiggle" />
        </p>
        <p className="text-sm text-gray-500">{role}</p>
        <p className="text-xs text-gray-400 mt-1">{email}</p>
        <button className="mt-4 text-sm font-medium text-blue-600 hover:underline">
          View Full Profile →
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
