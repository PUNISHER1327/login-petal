import { useState } from "react";

interface AnimatedToggleButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const AnimatedToggleButton = ({ text, onClick, className = "" }: AnimatedToggleButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`text-primary hover:text-primary-dark font-medium transition-colors duration-300 ${className}`}
    >
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`inline-block transition-transform duration-300 ${
            isHovered ? "animate-bounce" : ""
          }`}
          style={{
            animationDelay: `${index * 50}ms`,
            animationDuration: "0.6s",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </button>
  );
};

export { AnimatedToggleButton };