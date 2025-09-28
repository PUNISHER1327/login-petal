import { useState } from "react";
import { AuthForm } from "@/components/auth/AuthForm";
import { HeroSection } from "@/components/auth/HeroSection";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light/10 via-background to-primary-dark/10">
      <div className="container mx-auto h-screen">
        {/* Desktop: Split layout */}
        <div className="hidden lg:grid lg:grid-cols-2 h-full">
          {/* Left: Hero Section - Fixed height to prevent movement */}
          <div className="relative h-full">
            <HeroSection />
          </div>
          
          {/* Right: Auth Form - Fixed width container */}
          <div className="flex items-center justify-center p-8 overflow-hidden">
            <div className="w-full max-w-md">
              <AuthForm isSignUp={isSignUp} onToggle={toggleAuthMode} />
            </div>
          </div>
        </div>

        {/* Mobile: Stacked layout */}
        <div className="lg:hidden flex flex-col h-full">
          {/* Top: Compact Hero - Fixed height */}
          <div className="h-64 flex-shrink-0">
            <HeroSection />
          </div>
          
          {/* Bottom: Auth Form */}
          <div className="flex-1 flex items-center justify-center p-4 min-h-0 overflow-auto">
            <AuthForm isSignUp={isSignUp} onToggle={toggleAuthMode} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;