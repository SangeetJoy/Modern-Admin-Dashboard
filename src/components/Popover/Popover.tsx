import React, { useState, useRef, useEffect } from "react";

const Popover = ({
  trigger,
  children,
  position = "bottom",
  triggerType = "click", // "click" or "hover"
}: {
  trigger: React.ReactNode;
  children: React.ReactNode;
  position?: "bottom" | "top" | "left" | "right";
  triggerType?: "click" | "hover";
}) => {
  const [open, setOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const togglePopover = () => setOpen(!open);

  const wrapperProps =
    triggerType === "click"
      ? { onClick: togglePopover }
      : {
          onMouseEnter: () => setOpen(true),
          onMouseLeave: () => setOpen(false),
        };

  return (
    <div ref={popoverRef} className="relative inline-block" {...wrapperProps}>
      {trigger}

      {open && (
        <div
          className={`absolute z-20 bg-white border border-gray-200 rounded-md shadow-md transition-all w-[180px]`}
          style={{
            top: position === "bottom" ? "100%" : undefined,
            bottom: position === "top" ? "100%" : undefined,
            left: position === "right" ? "100%" : undefined,
            right: position === "left" ? "100%" : undefined,
            marginTop: position === "bottom" ? "0.5rem" : undefined,
            marginBottom: position === "top" ? "0.5rem" : undefined,
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Popover;
