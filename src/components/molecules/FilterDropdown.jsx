import React, { useState } from "react";
import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const FilterDropdown = ({ 
  options = [], 
  value, 
  onChange, 
  placeholder = "Filter",
  className 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option.value);
    setIsOpen(false);
  };

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className={cn("relative", className)}>
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="justify-between min-w-[120px]"
      >
        <span className="truncate">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ApperIcon 
          name="ChevronDown" 
          className={cn("ml-2 h-4 w-4 transition-transform", isOpen && "rotate-180")} 
        />
      </Button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <button
              onClick={() => handleSelect({ value: "", label: "All" })}
              className="block w-full px-4 py-2 text-left text-sm text-secondary-700 hover:bg-secondary-100"
            >
              All
            </button>
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect(option)}
                className={cn(
                  "block w-full px-4 py-2 text-left text-sm text-secondary-700 hover:bg-secondary-100",
                  value === option.value && "bg-primary-50 text-primary-700"
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default FilterDropdown;