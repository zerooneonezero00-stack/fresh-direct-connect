import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import VegetableCard from "@/components/vegetables/VegetableCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, SlidersHorizontal, MapPin, X } from "lucide-react";

const allVegetables = [
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
    category: "Fruits",
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
    category: "Leafy Greens",
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
    category: "Peppers",
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
    category: "Root Vegetables",
  },
  {
    id: "5",
    name: "Green Beans",
    price: 3.00,
    unit: "kg",
    farmer: "Mountain View Farm",
    farmerImage: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop",
    image: "https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?w=400&h=300&fit=crop",
    isOrganic: true,
    harvestDate: "Today",
    rating: 4.5,
    distance: "4.2 km",
    category: "Beans",
  },
  {
    id: "6",
    name: "Fresh Broccoli",
    price: 3.50,
    unit: "kg",
    farmer: "Green Valley Farm",
    farmerImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&h=300&fit=crop",
    isOrganic: true,
    harvestDate: "Yesterday",
    rating: 4.8,
    distance: "2.5 km",
    category: "Cruciferous",
  },
  {
    id: "7",
    name: "Zucchini",
    price: 2.80,
    unit: "kg",
    farmer: "Sunny Acres",
    farmerImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    image: "https://images.unsplash.com/photo-1563252722-6434563a985d?w=400&h=300&fit=crop",
    isOrganic: false,
    harvestDate: "Today",
    rating: 4.4,
    distance: "3.1 km",
    category: "Squash",
  },
  {
    id: "8",
    name: "Sweet Potatoes",
    price: 3.20,
    unit: "kg",
    farmer: "Hill Top Gardens",
    farmerImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    image: "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=400&h=300&fit=crop",
    isOrganic: true,
    harvestDate: "3 days ago",
    rating: 4.7,
    distance: "5.0 km",
    category: "Root Vegetables",
  },
];

const categories = ["All", "Leafy Greens", "Root Vegetables", "Fruits", "Peppers", "Beans", "Cruciferous", "Squash"];

const Browse = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showOrganic, setShowOrganic] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredVegetables = allVegetables.filter((veg) => {
    const matchesSearch = veg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      veg.farmer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || veg.category === selectedCategory;
    const matchesOrganic = !showOrganic || veg.isOrganic;
    return matchesSearch && matchesCategory && matchesOrganic;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-16">
        {/* Hero */}
        <section className="bg-leaf-light/50 py-8 md:py-12">
          <div className="container">
            <h1 className="mb-2 font-display text-3xl font-bold text-foreground md:text-4xl">
              Browse Fresh Vegetables
            </h1>
            <p className="mb-6 text-muted-foreground">
              Discover farm-fresh produce from local farmers near you
            </p>

            {/* Search */}
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search vegetables or farmers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-14 pl-12 text-lg"
                />
              </div>
              <Button
                variant={isFilterOpen ? "default" : "secondary"}
                size="icon"
                className="h-14 w-14"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <SlidersHorizontal className="h-5 w-5" />
              </Button>
            </div>

            {/* Filters */}
            {isFilterOpen && (
              <div className="mt-4 animate-fade-up rounded-2xl bg-card p-4 shadow-card">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-medium text-foreground">Filters</h3>
                  <Button variant="ghost" size="sm" onClick={() => {
                    setSelectedCategory("All");
                    setShowOrganic(false);
                  }}>
                    Clear All
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={showOrganic ? "default" : "outline"}
                    size="sm"
                    onClick={() => setShowOrganic(!showOrganic)}
                  >
                    🌿 Organic Only
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Categories */}
        <section className="border-b border-border bg-background py-4">
          <div className="container">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "secondary"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="shrink-0"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-8">
          <div className="container">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">{filteredVegetables.length}</span> vegetables found
              </p>
              {(selectedCategory !== "All" || showOrganic) && (
                <div className="flex gap-2">
                  {selectedCategory !== "All" && (
                    <Badge variant="secondary" className="gap-1">
                      {selectedCategory}
                      <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedCategory("All")} />
                    </Badge>
                  )}
                  {showOrganic && (
                    <Badge variant="secondary" className="gap-1">
                      Organic
                      <X className="h-3 w-3 cursor-pointer" onClick={() => setShowOrganic(false)} />
                    </Badge>
                  )}
                </div>
              )}
            </div>

            {filteredVegetables.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredVegetables.map((vegetable, index) => (
                  <div
                    key={vegetable.id}
                    className="animate-fade-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <VegetableCard {...vegetable} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-16 text-center">
                <p className="text-lg text-muted-foreground">No vegetables found matching your criteria.</p>
                <Button variant="soft" className="mt-4" onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
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

export default Browse;
