import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, Star, Leaf, ArrowLeft, MessageCircle, 
  Phone, Mail, Calendar, Package 
} from "lucide-react";
import VegetableCard from "@/components/vegetables/VegetableCard";

// Mock data - will be replaced with real data later
const farmersData: Record<string, any> = {
  "1": {
    id: "1",
    name: "Maria's Garden",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=500&fit=crop",
    location: "Green Valley, CA",
    distance: "2.5 km",
    crops: ["Tomatoes", "Peppers", "Herbs", "Eggplants"],
    rating: 4.9,
    reviews: 128,
    isOrganic: true,
    description: "Family-owned organic farm specializing in heirloom tomatoes and fresh herbs. We've been farming for over 20 years, using sustainable practices passed down through generations.",
    phone: "+1 (555) 123-4567",
    email: "maria@mariasgarden.com",
    memberSince: "2020",
    totalProducts: 24,
  },
  "2": {
    id: "2",
    name: "Sunny Meadows Farm",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=400&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&h=500&fit=crop",
    location: "Riverside, CA",
    distance: "3.1 km",
    crops: ["Lettuce", "Spinach", "Kale", "Arugula"],
    rating: 4.8,
    reviews: 96,
    isOrganic: true,
    description: "Specializing in leafy greens grown with sustainable practices. Our farm focuses on providing the freshest salad greens to local communities.",
    phone: "+1 (555) 234-5678",
    email: "hello@sunnymeadows.com",
    memberSince: "2019",
    totalProducts: 18,
  },
  "3": {
    id: "3",
    name: "Hill Top Organics",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=500&fit=crop",
    location: "Mountain View, CA",
    distance: "5.0 km",
    crops: ["Carrots", "Beets", "Radishes", "Potatoes"],
    rating: 4.7,
    reviews: 84,
    isOrganic: false,
    description: "Root vegetable specialists with decades of farming experience. We take pride in growing the crunchiest carrots and most flavorful potatoes.",
    phone: "+1 (555) 345-6789",
    email: "info@hilltoporganics.com",
    memberSince: "2018",
    totalProducts: 15,
  },
  "4": {
    id: "4",
    name: "Valley Fresh Farms",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1595855759920-86582396756a?w=1200&h=500&fit=crop",
    location: "Pleasant Valley, CA",
    distance: "4.2 km",
    crops: ["Cucumbers", "Zucchini", "Squash"],
    rating: 4.6,
    reviews: 72,
    isOrganic: true,
    description: "Fresh seasonal vegetables delivered straight from our fields. We believe in quality over quantity.",
    phone: "+1 (555) 456-7890",
    email: "contact@valleyfresh.com",
    memberSince: "2021",
    totalProducts: 12,
  },
  "5": {
    id: "5",
    name: "Green Thumb Gardens",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=1200&h=500&fit=crop",
    location: "Oak Park, CA",
    distance: "6.8 km",
    crops: ["Broccoli", "Cauliflower", "Cabbage"],
    rating: 4.8,
    reviews: 91,
    isOrganic: true,
    description: "Cruciferous vegetable experts committed to organic farming. Our vegetables are packed with nutrients and flavor.",
    phone: "+1 (555) 567-8901",
    email: "grow@greenthumb.com",
    memberSince: "2017",
    totalProducts: 20,
  },
  "6": {
    id: "6",
    name: "Sunrise Produce",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1574323347407-f5e1c5a1ec21?w=1200&h=500&fit=crop",
    location: "Eastside, CA",
    distance: "3.5 km",
    crops: ["Green Beans", "Peas", "Sweet Corn"],
    rating: 4.5,
    reviews: 63,
    isOrganic: false,
    description: "Traditional farming methods producing crisp, delicious vegetables. We've been serving the community for three generations.",
    phone: "+1 (555) 678-9012",
    email: "farm@sunriseproduce.com",
    memberSince: "2016",
    totalProducts: 16,
  },
};

// Mock vegetables for this farmer
const farmerVegetables = [
  {
    id: "1",
    name: "Heirloom Tomatoes",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=300&fit=crop",
    price: 4.99,
    unit: "kg",
    farmer: "Maria's Garden",
    farmerId: "1",
    farmerImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop",
    isOrganic: true,
    rating: 4.9,
    distance: "2.5 km",
    harvestDate: "Today",
  },
  {
    id: "2",
    name: "Fresh Basil",
    image: "https://images.unsplash.com/photo-1618375569909-3c8616cf7e3e?w=400&h=300&fit=crop",
    price: 2.99,
    unit: "bunch",
    farmer: "Maria's Garden",
    farmerId: "1",
    farmerImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop",
    isOrganic: true,
    rating: 4.8,
    distance: "2.5 km",
    harvestDate: "Yesterday",
  },
  {
    id: "3",
    name: "Bell Peppers",
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&h=300&fit=crop",
    price: 3.49,
    unit: "kg",
    farmer: "Maria's Garden",
    farmerId: "1",
    farmerImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop",
    isOrganic: true,
    rating: 4.7,
    distance: "2.5 km",
    harvestDate: "2 days ago",
  },
];

const FarmerProfile = () => {
  const { id } = useParams<{ id: string }>();
  const farmer = id ? farmersData[id] : null;

  if (!farmer) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-20">
          <div className="container text-center">
            <h1 className="mb-4 font-display text-3xl font-bold text-foreground">
              Farmer Not Found
            </h1>
            <p className="mb-8 text-muted-foreground">
              We couldn't find the farmer you're looking for.
            </p>
            <Button asChild>
              <Link to="/farmers">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Farmers
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-16">
        {/* Cover Image */}
        <div className="relative h-48 md:h-72 lg:h-80 overflow-hidden">
          <img
            src={farmer.coverImage}
            alt={farmer.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
          
          {/* Back Button */}
          <Button
            variant="secondary"
            size="sm"
            className="absolute left-4 top-4 md:left-6 md:top-6"
            asChild
          >
            <Link to="/farmers">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Link>
          </Button>
        </div>

        {/* Profile Header */}
        <div className="container">
          <div className="relative -mt-16 mb-8 md:-mt-20">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-end">
              {/* Avatar */}
              <div className="relative">
                <img
                  src={farmer.image}
                  alt={farmer.name}
                  className="h-28 w-28 rounded-2xl border-4 border-background object-cover shadow-lg md:h-36 md:w-36"
                />
                {farmer.isOrganic && (
                  <div className="absolute -bottom-2 -right-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                    <Leaf className="h-5 w-5" />
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                    {farmer.name}
                  </h1>
                  {farmer.isOrganic && (
                    <Badge className="bg-primary text-primary-foreground">
                      <Leaf className="mr-1 h-3 w-3" />
                      Certified Organic
                    </Badge>
                  )}
                </div>

                <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {farmer.location} • {farmer.distance} away
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-harvest text-harvest" />
                    {farmer.rating} ({farmer.reviews} reviews)
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Member since {farmer.memberSince}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <Button variant="hero" size="lg">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Contact Farmer
                  </Button>
                  <Button variant="outline" size="lg">
                    <Phone className="mr-2 h-5 w-5" />
                    Call
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="rounded-xl bg-card p-4 text-center shadow-card">
              <p className="font-display text-2xl font-bold text-foreground">{farmer.rating}</p>
              <p className="text-sm text-muted-foreground">Rating</p>
            </div>
            <div className="rounded-xl bg-card p-4 text-center shadow-card">
              <p className="font-display text-2xl font-bold text-foreground">{farmer.reviews}</p>
              <p className="text-sm text-muted-foreground">Reviews</p>
            </div>
            <div className="rounded-xl bg-card p-4 text-center shadow-card">
              <p className="font-display text-2xl font-bold text-foreground">{farmer.totalProducts}</p>
              <p className="text-sm text-muted-foreground">Products</p>
            </div>
            <div className="rounded-xl bg-card p-4 text-center shadow-card">
              <p className="font-display text-2xl font-bold text-foreground">{farmer.crops.length}</p>
              <p className="text-sm text-muted-foreground">Crop Types</p>
            </div>
          </div>

          {/* About Section */}
          <div className="mb-8 rounded-2xl bg-card p-6 shadow-card">
            <h2 className="mb-4 font-display text-xl font-semibold text-foreground">
              About {farmer.name}
            </h2>
            <p className="mb-6 text-muted-foreground leading-relaxed">
              {farmer.description}
            </p>

            {/* Crops */}
            <div className="mb-6">
              <h3 className="mb-3 text-sm font-medium text-muted-foreground">Crops We Grow</h3>
              <div className="flex flex-wrap gap-2">
                {farmer.crops.map((crop: string) => (
                  <Badge key={crop} variant="secondary" className="bg-leaf-light text-primary">
                    {crop}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-center gap-3 text-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-muted-foreground">Phone</p>
                  <p className="font-medium text-foreground">{farmer.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">{farmer.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div>
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Package className="h-6 w-6 text-primary" />
                <h2 className="font-display text-xl font-semibold text-foreground">
                  Available Products
                </h2>
              </div>
              <Badge variant="secondary">{farmerVegetables.length} items</Badge>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {farmerVegetables.map((vegetable) => (
                <VegetableCard key={vegetable.id} {...vegetable} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FarmerProfile;
