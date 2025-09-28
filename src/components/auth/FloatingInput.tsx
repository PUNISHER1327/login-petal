import { useState, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FloatingInput = forwardRef<HTMLInputElement, FloatingInputProps>(
  ({ label, className, type = "text", ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setHasValue(e.target.value.length > 0);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(e.target.value.length > 0);
      props.onChange?.(e);
    };

    return (
      <div className="relative">
        <input
          ref={ref}
          type={type}
          className={cn(
            "w-full px-4 pt-6 pb-2 bg-background/50 border border-border rounded-lg",
            "input-glow transition-all duration-300 peer placeholder-transparent",
            "focus:outline-none focus:ring-0",
            className
          )}
          placeholder={label}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          {...props}
        />
        <label
          className={cn(
            "absolute left-4 transition-all duration-300 pointer-events-none text-muted-foreground",
            isFocused || hasValue
              ? "top-2 text-xs text-primary font-medium"
              : "top-1/2 -translate-y-1/2 text-base"
          )}
        >
          {label}
        </label>
      </div>
    );
  }
);

FloatingInput.displayName = "FloatingInput";

export { FloatingInput };