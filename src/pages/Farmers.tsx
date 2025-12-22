import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Star, Leaf, ArrowRight } from "lucide-react";

const allFarmers = [
  {
    id: "1",
    name: "Maria's Garden",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=400&fit=crop",
    location: "Green Valley, CA",
    distance: "2.5 km",
    crops: ["Tomatoes", "Peppers", "Herbs", "Eggplants"],
    rating: 4.9,
    reviews: 128,
    isOrganic: true,
    description: "Family-owned organic farm specializing in heirloom tomatoes and fresh herbs.",
  },
  {
    id: "2",
    name: "Sunny Meadows Farm",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=400&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=400&fit=crop",
    location: "Riverside, CA",
    distance: "3.1 km",
    crops: ["Lettuce", "Spinach", "Kale", "Arugula"],
    rating: 4.8,
    reviews: 96,
    isOrganic: true,
    description: "Specializing in leafy greens grown with sustainable practices.",
  },
  {
    id: "3",
    name: "Hill Top Organics",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=400&fit=crop",
    location: "Mountain View, CA",
    distance: "5.0 km",
    crops: ["Carrots", "Beets", "Radishes", "Potatoes"],
    rating: 4.7,
    reviews: 84,
    isOrganic: false,
    description: "Root vegetable specialists with decades of farming experience.",
  },
  {
    id: "4",
    name: "Valley Fresh Farms",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1595855759920-86582396756a?w=800&h=400&fit=crop",
    location: "Pleasant Valley, CA",
    distance: "4.2 km",
    crops: ["Cucumbers", "Zucchini", "Squash"],
    rating: 4.6,
    reviews: 72,
    isOrganic: true,
    description: "Fresh seasonal vegetables delivered straight from our fields.",
  },
  {
    id: "5",
    name: "Green Thumb Gardens",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=800&h=400&fit=crop",
    location: "Oak Park, CA",
    distance: "6.8 km",
    crops: ["Broccoli", "Cauliflower", "Cabbage"],
    rating: 4.8,
    reviews: 91,
    isOrganic: true,
    description: "Cruciferous vegetable experts committed to organic farming.",
  },
  {
    id: "6",
    name: "Sunrise Produce",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1574323347407-f5e1c5a1ec21?w=800&h=400&fit=crop",
    location: "Eastside, CA",
    distance: "3.5 km",
    crops: ["Green Beans", "Peas", "Sweet Corn"],
    rating: 4.5,
    reviews: 63,
    isOrganic: false,
    description: "Traditional farming methods producing crisp, delicious vegetables.",
  },
];

const Farmers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showOrganic, setShowOrganic] = useState(false);

  const filteredFarmers = allFarmers.filter((farmer) => {
    const matchesSearch = farmer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      farmer.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      farmer.crops.some(crop => crop.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesOrganic = !showOrganic || farmer.isOrganic;
    return matchesSearch && matchesOrganic;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-16">
        {/* Hero */}
        <section className="bg-leaf-light/50 py-8 md:py-12">
          <div className="container">
            <h1 className="mb-2 font-display text-3xl font-bold text-foreground md:text-4xl">
              Our Local Farmers
            </h1>
            <p className="mb-6 text-muted-foreground">
              Meet the farmers growing fresh produce in your community
            </p>

            {/* Search */}
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search farmers, locations, or crops..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-14 pl-12 text-lg"
                />
              </div>
              <Button
                variant={showOrganic ? "default" : "secondary"}
                className="h-14"
                onClick={() => setShowOrganic(!showOrganic)}
              >
                <Leaf className="mr-2 h-5 w-5" />
                Organic
              </Button>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-8">
          <div className="container">
            <p className="mb-6 text-muted-foreground">
              <span className="font-medium text-foreground">{filteredFarmers.length}</span> farmers near you
            </p>

            {filteredFarmers.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredFarmers.map((farmer, index) => (
                  <Link
                    key={farmer.id}
                    to={`/farmer/${farmer.id}`}
                    className="group animate-fade-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="overflow-hidden rounded-2xl bg-card shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
                      {/* Cover Image */}
                      <div className="relative h-32 overflow-hidden">
                        <img
                          src={farmer.coverImage}
                          alt={farmer.name}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                        {farmer.isOrganic && (
                          <Badge className="absolute right-3 top-3 bg-primary text-primary-foreground">
                            <Leaf className="mr-1 h-3 w-3" />
                            Organic
                          </Badge>
                        )}
                      </div>

                      {/* Content */}
                      <div className="relative px-6 pb-6">
                        {/* Avatar */}
                        <div className="-mt-10 mb-4">
                          <img
                            src={farmer.image}
                            alt={farmer.name}
                            className="h-20 w-20 rounded-2xl border-4 border-card object-cover shadow-md"
                          />
                        </div>

                        <h3 className="mb-1 font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {farmer.name}
                        </h3>
                        
                        <div className="mb-3 flex items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {farmer.distance}
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="h-3.5 w-3.5 fill-harvest text-harvest" />
                            {farmer.rating} ({farmer.reviews})
                          </span>
                        </div>

                        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                          {farmer.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {farmer.crops.slice(0, 3).map((crop) => (
                            <Badge key={crop} variant="secondary" className="bg-leaf-light text-primary">
                              {crop}
                            </Badge>
                          ))}
                          {farmer.crops.length > 3 && (
                            <Badge variant="secondary">+{farmer.crops.length - 3}</Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="py-16 text-center">
                <p className="text-lg text-muted-foreground">No farmers found matching your criteria.</p>
                <Button variant="soft" className="mt-4" onClick={() => {
                  setSearchQuery("");
                  setShowOrganic(false);
                }}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Farmers;
