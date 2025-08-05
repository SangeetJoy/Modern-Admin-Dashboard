import { MessageCircle, Paperclip, Hourglass, Ellipsis } from "lucide-react";

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
        <Ellipsis className="text-gray-500 text-sm" size={18} />
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
            <MessageCircle className="text-gray-400 text-sm" size={16} />
            <span>{comments.length}</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Paperclip className="text-gray-400 text-sm" size={16} />
            <span>{links.length}</span>
          </div>
        </div>
        <div className="flex items-center -space-x-2">
          {assignees.map(({ name, imageUrl, id, imageUrlSecondary }) => {
            console.log("Rendering assignee:", { imageUrl });
            return (
              <picture key={id}>
                <source
                  srcSet={imageUrl}
                  type="image/webp"
                  className="w-6 h-6 rounded-full object-cover border border-white"
                  sizes="24px"
                  width={24}
                  height={24}
                />
                <img
                  src={imageUrlSecondary}
                  className="w-6 h-6 rounded-full object-cover border border-white"
                  sizes="24px"
                  width={24}
                  height={24}
                />
              </picture>
            );
          })}
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
          <Hourglass className="text-gray-400 mr-1" size={14} />
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
