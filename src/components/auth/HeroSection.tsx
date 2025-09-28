import heroImage from "@/assets/hero-illustration.jpg";

const HeroSection = () => {
  return (
    <div className="relative h-full bg-gradient-to-br from-primary-light/20 to-primary-dark/20 overflow-hidden group">
      {/* Animated background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-primary-dark/20 rounded-full blur-lg animate-pulse animation-delay-300" />
      </div>

      {/* Hero image with hover effects - positioned higher */}
      <div className="relative h-full flex items-center justify-center p-8 pt-16">
        <div className="relative max-w-lg">
          <img
            src={heroImage}
            alt="Task management collaboration illustration"
            className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center backdrop-blur-sm animate-bounce animation-delay-200">
            <div className="w-8 h-8 bg-primary rounded-full" />
          </div>
          
          <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-primary-dark/10 rounded-full flex items-center justify-center backdrop-blur-sm animate-bounce animation-delay-100">
            <div className="w-6 h-6 bg-primary-dark rounded-full" />
          </div>
        </div>
      </div>

      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary-dark/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Text below image - positioned higher */}
      <div className="absolute bottom-16 left-8 right-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Streamline Your Workflow
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Join thousands of teams who trust TaskFlow to organize, prioritize, and accomplish their goals together.
        </p>
      </div>
    </div>
  );
};

export { HeroSection };