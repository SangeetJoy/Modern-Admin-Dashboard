import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdOutlineRateReview, MdBlock } from "react-icons/md";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import MenuItem from "../MenuItem/MenuItem";
import Popover from "../Popover/Popover";
import StatusBadge from "../StatusBadge/StatusBadge";

const StatusPopover = ({
  currentStatus,
  onSelect,
}: {
  currentStatus: string;
  onSelect: (status: string) => void;
}) => {
  const statuses = [
    {
      name: "In Progress",
      icon: (
        <AiOutlineLoading3Quarters className="w-4 h-4 animate-spin text-amber-400" />
      ),
    },
    {
      name: "In Review",
      icon: <MdOutlineRateReview className="w-4 h-4 text-blue-400" />,
    },
    {
      name: "Done",
      icon: <IoCheckmarkDoneOutline className="w-4 h-4 text-green-400" />,
    },
    { name: "Blocked", icon: <MdBlock className="w-4 h-4 text-red-400" /> },
  ];

  return (
    <Popover trigger={<StatusBadge name={currentStatus} />}>
      {statuses.map((status) => (
        <div className="px-3 py-1.5">
          <MenuItem
            key={status.name}
            icon={status.icon}
            label={status.name}
            onClick={() => onSelect(status.name)}
          />
        </div>
      ))}
    </Popover>
  );
};

export default StatusPopover;
