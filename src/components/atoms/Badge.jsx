import React from "react";
import { cn } from "@/utils/cn";

const Badge = React.forwardRef(({ 
  className, 
  variant = "default", 
  children,
  ...props 
}, ref) => {
  const variants = {
    default: "bg-gradient-to-r from-secondary-100 to-secondary-200 text-secondary-800",
    success: "bg-gradient-to-r from-green-100 to-green-200 text-green-800",
    warning: "bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800",
    error: "bg-gradient-to-r from-red-100 to-red-200 text-red-800",
    info: "bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800",
    primary: "bg-gradient-to-r from-primary-100 to-primary-200 text-primary-800",
    accent: "bg-gradient-to-r from-accent-100 to-accent-200 text-accent-800"
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
        variants[variant],
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});

Badge.displayName = "Badge";

export default Badge;