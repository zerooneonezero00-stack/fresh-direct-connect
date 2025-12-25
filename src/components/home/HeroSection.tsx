import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Users, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-leaf-light/50 to-background py-16 md:py-24 lg:py-32">
      {/* Background decorations */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-harvest/10 blur-3xl" />
      
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-leaf-light px-4 py-2 text-sm font-medium text-primary animate-fade-up">
            <Leaf className="h-4 w-4" />
            Farm to Table, Direct & Fresh
          </div>

          {/* Headline */}
          <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Fresh Vegetables,{" "}
            <span className="text-gradient">Straight from</span>{" "}
            Local Farmers
          </h1>

          {/* Subheadline */}
          <p className="mb-8 text-lg text-muted-foreground md:text-xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Skip the middlemen. Buy fresh, organic vegetables directly from farmers in your area. 
            Better prices for everyone, fresher produce for you.
          </p>

          {/* CTA Buttons */}
          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/browse">
                Browse Fresh Vegetables
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/auth?role=farmer">
                Join as Farmer
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="rounded-2xl bg-card p-6 shadow-card">
              <div className="mb-2 flex items-center justify-center gap-2 text-primary">
                <Users className="h-6 w-6" />
              </div>
              <p className="font-display text-3xl font-bold text-foreground">500+</p>
              <p className="text-sm text-muted-foreground">Local Farmers</p>
            </div>
            <div className="rounded-2xl bg-card p-6 shadow-card">
              <div className="mb-2 flex items-center justify-center gap-2 text-harvest">
                <Leaf className="h-6 w-6" />
              </div>
              <p className="font-display text-3xl font-bold text-foreground">50+</p>
              <p className="text-sm text-muted-foreground">Vegetable Types</p>
            </div>
            <div className="rounded-2xl bg-card p-6 shadow-card">
              <div className="mb-2 flex items-center justify-center gap-2 text-primary">
                <TrendingUp className="h-6 w-6" />
              </div>
              <p className="font-display text-3xl font-bold text-foreground">30%</p>
              <p className="text-sm text-muted-foreground">Average Savings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
