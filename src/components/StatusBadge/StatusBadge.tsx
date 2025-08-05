import { clsx } from "clsx"; // optional, for conditional classes
import { LoaderCircle, NotebookPen, CheckCheck, ShieldX } from "lucide-react";

const StatusBadge = ({ name }: { name: string }) => {
  const config = {
    "in progress": {
      icon: <LoaderCircle className="animate-spin mr-1" size={18} />,
      bg: "bg-yellow-300 text-gray-700",
    },
    "in review": {
      icon: <NotebookPen className="mr-1" size={18} />,
      bg: "bg-sky-300 text-gray-700",
    },
    done: {
      icon: <CheckCheck className="mr-1" size={18} />,
      bg: "bg-green-300 text-gray-700",
    },
    blocked: {
      icon: <ShieldX className="mr-1" size={18} />,
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
