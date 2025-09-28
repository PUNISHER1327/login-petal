import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen animated-gradient flex items-center justify-center">
      <div className="glass-card p-8 rounded-xl max-w-md text-center animate-fade-in-up">
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Welcome to TaskFlow
        </h1>
        <p className="text-muted-foreground mb-6">
          This is where your dashboard would be! You've successfully signed in.
        </p>
        <Button 
          onClick={() => navigate("/")}
          variant="outline"
          className="w-full"
        >
          Back to Sign In
        </Button>
      </div>
    </div>
  );
};

export default Index;
