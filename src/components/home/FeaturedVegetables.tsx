import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import VegetableCard from "@/components/vegetables/VegetableCard";
import { ArrowRight } from "lucide-react";

const featuredVegetables = [
  {
    id: "1",
    name: "Organic Tomatoes",
    price: 3.50,
    unit: "kg",
    farmer: "Green Valley Farm",
    farmerImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=300&fit=crop",
    isOrganic: true,
    harvestDate: "Today",
    rating: 4.8,
    distance: "2.5 km",
  },
  {
    id: "2",
    name: "Fresh Spinach",
    price: 2.00,
    unit: "bunch",
    farmer: "Sunny Acres",
    farmerImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=300&fit=crop",
    isOrganic: true,
    harvestDate: "Yesterday",
    rating: 4.9,
    distance: "3.1 km",
  },
  {
    id: "3",
    name: "Red Bell Peppers",
    price: 4.00,
    unit: "kg",
    farmer: "Hill Top Gardens",
    farmerImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&h=300&fit=crop",
    isOrganic: false,
    harvestDate: "2 days ago",
    rating: 4.7,
    distance: "5.0 km",
  },
  {
    id: "4",
    name: "Fresh Carrots",
    price: 2.50,
    unit: "kg",
    farmer: "River Side Farm",
    farmerImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=300&fit=crop",
    isOrganic: true,
    harvestDate: "Today",
    rating: 4.6,
    distance: "1.8 km",
  },
];

const FeaturedVegetables = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="mb-2 font-display text-3xl font-bold text-foreground md:text-4xl">
              Fresh From The Farm
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover vegetables harvested just hours ago
            </p>
          </div>
          <Button variant="soft" size="lg" asChild>
            <Link to="/browse">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredVegetables.map((vegetable, index) => (
            <div
              key={vegetable.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <VegetableCard {...vegetable} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVegetables;
