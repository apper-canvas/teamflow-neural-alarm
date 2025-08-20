import ApperIcon from "@/components/ApperIcon";
import { cn } from "@/utils/cn";

const Empty = ({ 
  className, 
  title = "No data found",
  description = "There's nothing to show here yet.",
  action,
  actionLabel,
  icon = "Folder",
  variant = "default"
}) => {
  return (
    <div className={cn(
      "flex flex-col items-center justify-center p-8 text-center space-y-4",
      variant === "card" && "bg-white rounded-lg border border-secondary-200 shadow-card",
      className
    )}>
      <div className="relative">
        <div className="w-20 h-20 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-full flex items-center justify-center">
          <ApperIcon name={icon} className="w-10 h-10 text-secondary-500" />
        </div>
        <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center">
          <ApperIcon name="Plus" className="w-4 h-4 text-white" />
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-secondary-900">{title}</h3>
        <p className="text-secondary-600 max-w-md">{description}</p>
      </div>
      
      {action && actionLabel && (
        <button
          onClick={action}
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-600 to-accent-700 text-white font-medium rounded-md hover:from-accent-700 hover:to-accent-800 transition-all duration-200 transform hover:scale-105 shadow-md"
        >
          <ApperIcon name="Plus" className="w-5 h-5 mr-2" />
          {actionLabel}
        </button>
      )}
    </div>
  );
};

export default Empty;