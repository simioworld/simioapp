import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface HintProps {
  className?: string;
  label: string;
  simulators?: string[];
  children: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
  sideOffset?: number;
  alignOffset?: number;
}
const Hint = ({
  className,
  label,
  children,
  side = "bottom",
  align = "start",
  sideOffset = 4,
  alignOffset = 4,
  simulators = ["Assetto Corsa Competizione"],
}: HintProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          className={`${className} bg-slate-800 text-slate-100`}
          side={side}
          align={align}
          sideOffset={sideOffset}
          alignOffset={alignOffset}
        >
          <h3 className="font-semibold capitalize">{label}</h3>
          <p className="font-light">{simulators.join(" / ")}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Hint;
