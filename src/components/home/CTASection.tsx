import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Users } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2">
          {/* For Buyers */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-8 md:p-10">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary-foreground/10 blur-3xl" />
            <div className="relative">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-foreground/20">
                <Leaf className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="mb-3 font-display text-2xl font-bold text-primary-foreground md:text-3xl">
                Start Buying Fresh Today
              </h3>
              <p className="mb-6 text-primary-foreground/80">
                Browse vegetables from local farmers. Get fresher produce at better prices. 
                Support your local farming community.
              </p>
              <Button
                variant="secondary"
                size="lg"
                asChild
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <Link to="/browse">
                  Browse Vegetables
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* For Farmers */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-warm p-8 md:p-10">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-foreground/10 blur-3xl" />
            <div className="relative">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-foreground/20">
                <Users className="h-7 w-7 text-accent-foreground" />
              </div>
              <h3 className="mb-3 font-display text-2xl font-bold text-accent-foreground md:text-3xl">
                Sell Direct to Buyers
              </h3>
              <p className="mb-6 text-accent-foreground/80">
                Join our community of farmers. Reach more customers, set your own prices, 
                and keep more of your earnings.
              </p>
              <Button
                variant="secondary"
                size="lg"
                asChild
                className="bg-accent-foreground text-accent hover:bg-accent-foreground/90"
              >
                <Link to="/register">
                  Join as Farmer
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
