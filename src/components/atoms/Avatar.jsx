import React from "react";
import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";

const Avatar = React.forwardRef(({ 
  className, 
  src,
  alt,
  name,
  size = "default",
  ...props 
}, ref) => {
  const sizes = {
    sm: "h-8 w-8 text-xs",
    default: "h-10 w-10 text-sm",
    lg: "h-12 w-12 text-base",
    xl: "h-16 w-16 text-lg"
  };

  const getInitials = (name) => {
    if (!name) return "?";
    return name
      .split(" ")
      .map(word => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center rounded-full bg-gradient-to-br from-secondary-100 to-secondary-300 font-medium text-secondary-700 ring-2 ring-white shadow-md",
        sizes[size],
        className
      )}
      ref={ref}
      {...props}
    >
      {src ? (
        <img
          src={src}
          alt={alt || name}
          className="h-full w-full rounded-full object-cover"
        />
      ) : (
        <span className="font-semibold">
          {name ? getInitials(name) : <ApperIcon name="User" className="h-1/2 w-1/2" />}
        </span>
      )}
    </div>
  );
});

Avatar.displayName = "Avatar";

export default Avatar;