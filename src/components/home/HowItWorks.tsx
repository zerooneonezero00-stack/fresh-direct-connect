import { Search, ShoppingCart, Truck, Smile } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse & Discover",
    description: "Find fresh vegetables from local farmers near you. Filter by type, price, or distance.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: ShoppingCart,
    title: "Add to Cart",
    description: "Select your vegetables and add them to your cart. See harvest dates and farmer details.",
    color: "bg-harvest/10 text-harvest",
  },
  {
    icon: Truck,
    title: "Pickup or Delivery",
    description: "Choose convenient pickup from the farm or get fresh vegetables delivered to your door.",
    color: "bg-leaf/10 text-leaf",
  },
  {
    icon: Smile,
    title: "Enjoy Fresh",
    description: "Enjoy vegetables that were harvested just hours ago. Support local farmers directly.",
    color: "bg-accent/10 text-accent",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-secondary/30 py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Getting fresh vegetables from local farmers is easier than you think
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-12 hidden h-0.5 w-full bg-border lg:block" />
              )}
              
              <div className="relative flex flex-col items-center text-center">
                {/* Step number */}
                <div className="absolute -top-2 right-1/2 translate-x-1/2 rounded-full bg-background px-2 text-xs font-semibold text-muted-foreground lg:-right-2 lg:translate-x-0">
                  {String(index + 1).padStart(2, "0")}
                </div>
                
                {/* Icon */}
                <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${step.color}`}>
                  <step.icon className="h-8 w-8" />
                </div>
                
                {/* Content */}
                <h3 className="mb-2 font-display text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
