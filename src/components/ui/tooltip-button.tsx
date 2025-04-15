
import React from 'react';
import { Button, ButtonProps } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface TooltipButtonProps extends ButtonProps {
  tooltip: string;
  children: React.ReactNode;
  tooltipClassName?: string;
}

export const TooltipButton: React.FC<TooltipButtonProps> = ({
  tooltip,
  children,
  className,
  tooltipClassName,
  ...props
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button className={cn("", className)} {...props}>
            {children}
          </Button>
        </TooltipTrigger>
        <TooltipContent className={cn("", tooltipClassName)}>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
