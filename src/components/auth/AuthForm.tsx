import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { FloatingInput } from "./FloatingInput";
import { SocialButton } from "./SocialButton";
import { ForgotPasswordLink } from "./ForgotPasswordLink";
import { AnimatedToggleButton } from "./AnimatedToggleButton";
import { cn } from "@/lib/utils";

interface AuthFormProps {
  isSignUp: boolean;
  onToggle: () => void;
}

const AuthForm = ({ isSignUp, onToggle }: AuthFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    agreeToTerms: false,
  });

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="glass-card p-8 rounded-xl w-full animate-fade-in-up">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          {isSignUp ? "Create Account" : "Welcome Back"}
        </h1>
        <p className="text-muted-foreground">
          {isSignUp 
            ? "Join thousands of productive teams" 
            : "Sign in to your TaskFlow account"
          }
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {isSignUp && (
          <div className="animate-slide-in">
            <FloatingInput
              label="Full Name"
              value={formData.name}
              onChange={handleInputChange("name")}
              required
            />
          </div>
        )}
        
        <div className={cn("animate-slide-in", isSignUp && "animation-delay-100")}>
          <FloatingInput
            type="email"
            label="Email Address"
            value={formData.email}
            onChange={handleInputChange("email")}
            required
          />
        </div>
        
        <div className={cn("animate-slide-in", isSignUp && "animation-delay-200")}>
          <FloatingInput
            type="password"
            label="Password"
            value={formData.password}
            onChange={handleInputChange("password")}
            required
          />
        </div>

        {isSignUp && (
          <div className="flex items-center space-x-2 animate-slide-in animation-delay-300">
            <Checkbox
              id="terms"
              checked={formData.agreeToTerms}
              onCheckedChange={(checked) => 
                setFormData(prev => ({ ...prev, agreeToTerms: checked as boolean }))
              }
            />
            <label
              htmlFor="terms"
              className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to the{" "}
              <a href="#" className="text-primary hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-primary hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>
        )}

        <Button 
          type="submit" 
          className="w-full h-12 btn-gradient text-white font-semibold text-base"
        >
          {isSignUp ? "Create Account" : "Sign In"}
        </Button>

        {!isSignUp && (
          <div className="text-center">
            <ForgotPasswordLink onClick={() => console.log("Forgot password")} />
          </div>
        )}

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>

        <div className="space-y-3">
          <SocialButton provider="google" onClick={() => console.log("Google login")} />
          <SocialButton provider="facebook" onClick={() => console.log("Facebook login")} />
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <AnimatedToggleButton
              text={isSignUp ? "Sign in" : "Sign up"}
              onClick={onToggle}
            />
          </p>
        </div>
      </form>
    </div>
  );
};

export { AuthForm };