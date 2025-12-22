import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Search, ShoppingCart, Truck, Smile, 
  Leaf, Users, DollarSign, Heart,
  ArrowRight, CheckCircle2
} from "lucide-react";

const buyerSteps = [
  {
    icon: Search,
    title: "Browse Local Farms",
    description: "Discover vegetables from farmers in your area. See what's fresh, check prices, and read farmer reviews.",
  },
  {
    icon: ShoppingCart,
    title: "Add to Your Cart",
    description: "Select the vegetables you want. See harvest dates to know exactly how fresh your produce is.",
  },
  {
    icon: Truck,
    title: "Choose Delivery or Pickup",
    description: "Pick up from the farm for the freshest experience, or get convenient delivery to your doorstep.",
  },
  {
    icon: Smile,
    title: "Enjoy Fresh Vegetables",
    description: "Savor vegetables harvested just hours ago. Rate your experience to help other buyers.",
  },
];

const farmerSteps = [
  {
    icon: Users,
    title: "Create Your Profile",
    description: "Set up your farm profile with photos, your story, and what makes your produce special.",
  },
  {
    icon: Leaf,
    title: "List Your Vegetables",
    description: "Add your vegetables with photos, prices, and harvest information. Update availability anytime.",
  },
  {
    icon: DollarSign,
    title: "Receive Orders",
    description: "Get notified when buyers order. Manage orders, arrange delivery, and build relationships.",
  },
  {
    icon: Heart,
    title: "Grow Your Business",
    description: "Build a loyal customer base, get reviews, and expand your reach without middlemen.",
  },
];

const benefits = [
  {
    title: "Fresher Produce",
    description: "Vegetables harvested within hours, not days or weeks like supermarket produce.",
    forBuyers: true,
    forFarmers: false,
  },
  {
    title: "Better Prices",
    description: "No middlemen means savings for buyers and better earnings for farmers.",
    forBuyers: true,
    forFarmers: true,
  },
  {
    title: "Support Local",
    description: "Keep money in your community and support local farming families.",
    forBuyers: true,
    forFarmers: true,
  },
  {
    title: "Direct Connection",
    description: "Know exactly where your food comes from and who grows it.",
    forBuyers: true,
    forFarmers: true,
  },
  {
    title: "Fair Compensation",
    description: "Farmers set their own prices and keep more of what they earn.",
    forBuyers: false,
    forFarmers: true,
  },
  {
    title: "Build Relationships",
    description: "Connect directly with customers and build lasting business relationships.",
    forBuyers: false,
    forFarmers: true,
  },
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-leaf-light/50 py-12 md:py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 font-display text-3xl font-bold text-foreground md:text-5xl">
                How FarmFresh Works
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                A simple way to connect local farmers with buyers who want fresh, quality vegetables
              </p>
            </div>
          </div>
        </section>

        {/* For Buyers */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                For Buyers
              </span>
              <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                Get Fresh Vegetables in 4 Simple Steps
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {buyerSteps.map((step, index) => (
                <div key={index} className="relative animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  {index < buyerSteps.length - 1 && (
                    <div className="absolute left-1/2 top-8 hidden h-0.5 w-full bg-border lg:block" />
                  )}
                  <div className="relative flex flex-col items-center text-center">
                    <div className="relative mb-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <step.icon className="h-8 w-8" />
                      </div>
                      <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="mb-2 font-display text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/browse">
                  Start Browsing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* For Farmers */}
        <section className="bg-secondary/30 py-16 md:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <span className="mb-4 inline-block rounded-full bg-harvest/10 px-4 py-2 text-sm font-medium text-harvest">
                For Farmers
              </span>
              <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                Start Selling Direct in 4 Easy Steps
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {farmerSteps.map((step, index) => (
                <div key={index} className="relative animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  {index < farmerSteps.length - 1 && (
                    <div className="absolute left-1/2 top-8 hidden h-0.5 w-full bg-border lg:block" />
                  )}
                  <div className="relative flex flex-col items-center text-center">
                    <div className="relative mb-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-harvest/10 text-harvest">
                        <step.icon className="h-8 w-8" />
                      </div>
                      <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-harvest text-xs font-bold text-accent-foreground">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="mb-2 font-display text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="warm" size="xl" asChild>
                <Link to="/register">
                  Join as Farmer
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
                Benefits for Everyone
              </h2>
              <p className="text-lg text-muted-foreground">
                A marketplace that works for both farmers and buyers
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="animate-fade-up rounded-2xl bg-card p-6 shadow-card"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <h3 className="mb-2 font-display text-xl font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="mb-4 text-muted-foreground">{benefit.description}</p>
                  <div className="flex gap-3">
                    {benefit.forBuyers && (
                      <span className="flex items-center gap-1 text-sm text-primary">
                        <CheckCircle2 className="h-4 w-4" />
                        Buyers
                      </span>
                    )}
                    {benefit.forFarmers && (
                      <span className="flex items-center gap-1 text-sm text-harvest">
                        <CheckCircle2 className="h-4 w-4" />
                        Farmers
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-hero py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 font-display text-3xl font-bold text-primary-foreground md:text-4xl">
                Ready to Get Started?
              </h2>
              <p className="mb-8 text-lg text-primary-foreground/80">
                Join thousands of farmers and buyers already using FarmFresh to connect and trade fresh vegetables.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  size="xl"
                  asChild
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  <Link to="/browse">Browse Vegetables</Link>
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  asChild
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Link to="/register">Join as Farmer</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
