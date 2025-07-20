import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdOutlineRateReview, MdBlock } from "react-icons/md";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import MenuItem from "../MenuItem/MenuItem";
import Popover from "../Popover/Popover";
import StatusBadge from "../StatusBadge/StatusBadge";
import { STATUSES } from "../../../data";

const StatusPopover = ({ getValue, table, row, column }: any) => {
  const { name, id, color } = getValue();
  const { updateData } = table.options.meta;

  const StatusIconMap: any = {
    "in progress": {
      icon: (
        <AiOutlineLoading3Quarters className="w-4 h-4 animate-spin text-amber-400" />
      ),
    },
    "in review": {
      icon: <MdOutlineRateReview className="w-4 h-4 text-blue-400" />,
    },
    done: {
      icon: <IoCheckmarkDoneOutline className="w-4 h-4 text-green-400" />,
    },
    blocked: {
      icon: <MdBlock className="w-4 h-4 text-red-400" />,
    },
  };

  return (
    <Popover trigger={<StatusBadge name={name} />}>
      {STATUSES.map((status) => (
        <div className="px-3 py-1.5">
          <MenuItem
            key={status.id}
            icon={StatusIconMap[status.name.toLowerCase()].icon}
            label={status.name}
            onClick={() => updateData(row.index, column.id, status)}
          />
        </div>
      ))}
    </Popover>
  );
};

export default StatusPopover;
