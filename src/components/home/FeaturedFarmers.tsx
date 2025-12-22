import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Leaf, ArrowRight } from "lucide-react";

const farmers = [
  {
    id: "1",
    name: "Maria's Garden",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop",
    location: "Green Valley, CA",
    crops: ["Tomatoes", "Peppers", "Herbs"],
    rating: 4.9,
    reviews: 128,
    isOrganic: true,
  },
  {
    id: "2",
    name: "Sunny Meadows Farm",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=400&fit=crop",
    location: "Riverside, CA",
    crops: ["Lettuce", "Spinach", "Kale"],
    rating: 4.8,
    reviews: 96,
    isOrganic: true,
  },
  {
    id: "3",
    name: "Hill Top Organics",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    location: "Mountain View, CA",
    crops: ["Carrots", "Beets", "Radishes"],
    rating: 4.7,
    reviews: 84,
    isOrganic: false,
  },
];

const FeaturedFarmers = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="mb-2 font-display text-3xl font-bold text-foreground md:text-4xl">
              Meet Our Farmers
            </h2>
            <p className="text-lg text-muted-foreground">
              Trusted local farmers growing fresh produce for your table
            </p>
          </div>
          <Button variant="soft" size="lg" asChild>
            <Link to="/farmers">
              View All Farmers
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {farmers.map((farmer, index) => (
            <Link
              key={farmer.id}
              to={`/farmer/${farmer.id}`}
              className="group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="overflow-hidden rounded-2xl bg-card shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
                <div className="flex items-center gap-4 p-6">
                  {/* Avatar */}
                  <div className="relative">
                    <img
                      src={farmer.image}
                      alt={farmer.name}
                      className="h-20 w-20 rounded-2xl object-cover"
                    />
                    {farmer.isOrganic && (
                      <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Leaf className="h-4 w-4" />
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {farmer.name}
                    </h3>
                    <p className="mb-2 flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" />
                      {farmer.location}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 text-sm font-medium">
                        <Star className="h-4 w-4 fill-harvest text-harvest" />
                        {farmer.rating}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ({farmer.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Crops */}
                <div className="border-t border-border px-6 py-4">
                  <p className="mb-2 text-sm font-medium text-muted-foreground">
                    Growing:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {farmer.crops.map((crop) => (
                      <Badge key={crop} variant="secondary" className="bg-leaf-light text-primary">
                        {crop}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedFarmers;
