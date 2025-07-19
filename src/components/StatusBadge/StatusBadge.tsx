import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdOutlineRateReview } from "react-icons/md";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { MdBlock } from "react-icons/md";
import { clsx } from "clsx"; // optional, for conditional classes

const StatusBadge = ({ name }: { name: string }) => {
  const config = {
    "in progress": {
      icon: <AiOutlineLoading3Quarters className="animate-spin mr-1" />,
      bg: "bg-yellow-300 text-gray-700",
    },
    "in review": {
      icon: <MdOutlineRateReview className="mr-1" />,
      bg: "bg-sky-300 text-gray-700",
    },
    done: {
      icon: <IoCheckmarkDoneOutline className="mr-1" />,
      bg: "bg-green-300 text-gray-700",
    },
    blocked: {
      icon: <MdBlock className="mr-1" />,
      bg: "bg-red-300 text-gray-700",
    },
  };

  const status = config[name.toLowerCase()] || config["in progress"];

  return (
    <div
      className={clsx(
        "inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium hover:shadow-md transition-all cursor-pointer",
        status.bg
      )}
    >
      {status.icon}
      {name}
    </div>
  );
};

export default StatusBadge;
