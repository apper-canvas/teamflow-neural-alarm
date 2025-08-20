import ApperIcon from "@/components/ApperIcon";
import { cn } from "@/utils/cn";

const Error = ({ 
  className, 
  message = "Something went wrong", 
  onRetry,
  variant = "default"
}) => {
  return (
    <div className={cn(
      "flex flex-col items-center justify-center p-8 text-center space-y-4",
      variant === "card" && "bg-white rounded-lg border border-red-200 shadow-card",
      className
    )}>
      <div className="relative">
        <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center">
          <ApperIcon name="AlertCircle" className="w-8 h-8 text-red-600" />
        </div>
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
          <ApperIcon name="X" className="w-3 h-3 text-white" />
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-secondary-900">Error Occurred</h3>
        <p className="text-secondary-600 max-w-md">{message}</p>
      </div>
      
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-medium rounded-md hover:from-primary-700 hover:to-primary-800 transition-all duration-200 transform hover:scale-105 shadow-md"
        >
          <ApperIcon name="RefreshCw" className="w-4 h-4 mr-2" />
          Try Again
        </button>
      )}
    </div>
  );
};

export default Error;