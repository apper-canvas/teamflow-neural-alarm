import React from "react";
import { cn } from "@/utils/cn";

const Button = React.forwardRef(({ 
  className, 
  variant = "default", 
  size = "default", 
  children,
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105";
  
  const variants = {
    default: "bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 shadow-md",
    secondary: "bg-gradient-to-r from-secondary-100 to-secondary-200 text-secondary-900 hover:from-secondary-200 hover:to-secondary-300 border border-secondary-300",
    accent: "bg-gradient-to-r from-accent-600 to-accent-700 text-white hover:from-accent-700 hover:to-accent-800 shadow-md",
    outline: "border-2 border-primary-600 text-primary-600 hover:bg-gradient-to-r hover:from-primary-600 hover:to-primary-700 hover:text-white",
    ghost: "text-secondary-700 hover:bg-gradient-to-r hover:from-secondary-100 hover:to-secondary-200",
    danger: "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-md"
  };
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm h-8",
    default: "px-4 py-2 text-sm h-10",
    lg: "px-6 py-3 text-base h-12",
    icon: "p-2 h-10 w-10"
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;