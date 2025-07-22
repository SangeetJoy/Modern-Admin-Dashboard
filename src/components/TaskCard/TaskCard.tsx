import { BsThreeDots } from "react-icons/bs";
import { FaRegComments } from "react-icons/fa6";
import { GoLink } from "react-icons/go";
import { MdHourglassBottom } from "react-icons/md";

const TaskCard = ({
  priority = "High",
  text = "",
  subText,
  assignees,
  dueDate,
  comments,
  links,
  progress = "50",
  ref,
  isDragging,
}) => {
  return (
    <div
      className={`bg-white p-2 flex flex-col shadow-md rounded-lg w-full hover:shadow-lg transition cursor-pointer ${
        isDragging ? "opacity-30" : ""
      }`}
      ref={ref}
    >
      <div className="flex items-center justify-between mb-1.5">
        <div
          className={`px-1.5 py-0.5 rounded text-xs text-stone-900 ${
            priority === "high"
              ? "bg-red-400"
              : priority === "medium"
              ? "bg-yellow-400"
              : "bg-green-400"
          }
  `}
        >
          {priority}
        </div>
        <BsThreeDots className="text-gray-500 text-sm" />
      </div>

      <div className="mb-2">
        <div className="text-sm font-medium text-stone-800 truncate">
          {text}
        </div>
        <div className="text-xs text-stone-400 line-clamp-3">{subText}</div>
      </div>

      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <FaRegComments className="text-gray-400 text-sm" />
            <span>{comments.length}</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <GoLink className="text-gray-400 text-sm" />
            <span>{links.length}</span>
          </div>
        </div>
        <div className="flex items-center -space-x-2">
          {assignees.map(({ name, imageUrl, id }) => (
            <img
              key={id}
              src={imageUrl}
              alt=""
              className="w-6 h-6 rounded-full object-cover border border-white"
            />
          ))}
        </div>
      </div>

      <div className="flex items-center">
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div
            className="bg-green-500 h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex items-center ml-2 text-xs text-gray-500">
          <MdHourglassBottom className="text-gray-400 mr-1" />
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
