import React from "react";
import { cn } from "@/utils/cn";
import Input from "@/components/atoms/Input";

const FormField = React.forwardRef(({
  label,
  error,
  required = false,
  className,
  children,
  ...props
}, ref) => {
  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <label className="text-sm font-medium text-secondary-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      {children || <Input ref={ref} {...props} />}
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
});

FormField.displayName = "FormField";

export default FormField;