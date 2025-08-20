import React from "react";
import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import SearchBar from "@/components/molecules/SearchBar";

const Header = ({ 
  title,
  onMenuClick,
  onSearch,
  showSearch = false,
  actions,
  className 
}) => {
  return (
    <header className={cn(
      "bg-white border-b border-secondary-200 px-6 py-4",
      className
    )}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="lg:hidden"
          >
            <ApperIcon name="Menu" className="h-6 w-6" />
          </Button>

          <div>
            <h1 className="text-2xl font-bold text-secondary-900">{title}</h1>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {showSearch && (
            <div className="hidden md:block">
              <SearchBar
                placeholder="Search employees..."
                onSearch={onSearch}
                className="w-64"
              />
            </div>
          )}

          {actions && (
            <div className="flex items-center space-x-2">
              {actions}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;