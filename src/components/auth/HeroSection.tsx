import heroImage from "@/assets/hero-illustration.jpg";

const HeroSection = () => {
  return (
    <div className="relative h-full bg-gradient-to-br from-primary-light/20 to-primary-dark/20 overflow-hidden group">
      {/* Full cover image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Task management collaboration illustration"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary-dark/20 to-background/40" />
      </div>

      {/* Animated background blobs */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-primary-dark/20 rounded-full blur-lg animate-pulse animation-delay-300" />
      </div>

      {/* Floating elements */}
      <div className="absolute top-8 right-8 z-20 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-bounce animation-delay-200">
        <div className="w-8 h-8 bg-primary rounded-full" />
      </div>
      
      <div className="absolute top-32 left-8 z-20 w-12 h-12 bg-primary-dark/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-bounce animation-delay-100">
        <div className="w-6 h-6 bg-primary-dark rounded-full" />
      </div>

      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-primary/0 via-primary/10 to-primary-dark/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Centered text overlay */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 drop-shadow-lg">
          Streamline Your Workflow
        </h2>
        <p className="text-white/90 max-w-md mx-auto text-lg drop-shadow-md">
          Join thousands of teams who trust TaskFlow to organize, prioritize, and accomplish their goals together.
        </p>
      </div>
    </div>
  );
};

export { HeroSection };