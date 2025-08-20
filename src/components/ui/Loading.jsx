import { cn } from "@/utils/cn";

const Loading = ({ className, variant = "default" }) => {
  if (variant === "skeleton") {
    return (
      <div className={cn("space-y-4", className)}>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-secondary-200 to-secondary-300 rounded-full animate-pulse" />
          <div className="space-y-2">
            <div className="h-4 bg-gradient-to-r from-secondary-200 to-secondary-300 rounded w-32 animate-pulse" />
            <div className="h-3 bg-gradient-to-r from-secondary-200 to-secondary-300 rounded w-24 animate-pulse" />
          </div>
        </div>
        <div className="space-y-3">
          <div className="h-4 bg-gradient-to-r from-secondary-200 to-secondary-300 rounded animate-pulse" />
          <div className="h-4 bg-gradient-to-r from-secondary-200 to-secondary-300 rounded w-3/4 animate-pulse" />
          <div className="h-4 bg-gradient-to-r from-secondary-200 to-secondary-300 rounded w-1/2 animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className={cn("flex items-center justify-center p-8", className)}>
      <div className="relative">
        <div className="w-16 h-16 border-4 border-secondary-200 rounded-full animate-spin" />
        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-primary-600 rounded-full animate-spin border-t-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Loading;