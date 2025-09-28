import { useState } from "react";

interface ForgotPasswordLinkProps {
  onClick?: () => void;
}

const ForgotPasswordLink = ({ onClick }: ForgotPasswordLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const text = "Forgot your password?";

  return (
    <button
      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 letter-wave"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
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

export { ForgotPasswordLink };