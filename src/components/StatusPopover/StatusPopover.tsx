import MenuItem from "../MenuItem/MenuItem";
import Popover from "../Popover/Popover";
import StatusBadge from "../StatusBadge/StatusBadge";
import { STATUSES } from "../../../data";
import { LoaderCircle, NotebookPen, CheckCheck, ShieldX } from "lucide-react";

export const StatusIconMap: any = {
  "in progress": {
    icon: <LoaderCircle className="w-4 h-4 animate-spin text-amber-400" />,
  },
  "in review": {
    icon: <NotebookPen className="w-4 h-4 text-blue-400" />,
  },
  done: {
    icon: <CheckCheck className="w-4 h-4 text-green-400" />,
  },
  blocked: {
    icon: <ShieldX className="w-4 h-4 text-red-400" />,
  },
};

const StatusPopover = ({ getValue, table, row, column }: any) => {
  const { name } = getValue();
  const { updateData } = table.options.meta;

  // console.log({ id, column: column.id, rowIndex: row.index });

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
