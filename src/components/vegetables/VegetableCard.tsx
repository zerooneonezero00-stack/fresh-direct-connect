import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock, ShoppingCart } from "lucide-react";

interface VegetableCardProps {
  id: string;
  name: string;
  price: number;
  unit: string;
  farmer: string;
  farmerImage: string;
  image: string;
  isOrganic: boolean;
  harvestDate: string;
  rating: number;
  distance: string;
}

const VegetableCard = ({
  id,
  name,
  price,
  unit,
  farmer,
  farmerImage,
  image,
  isOrganic,
  harvestDate,
  rating,
  distance,
}: VegetableCardProps) => {
  return (
    <div className="group overflow-hidden rounded-2xl bg-card shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {isOrganic && (
          <Badge className="absolute left-3 top-3 bg-primary text-primary-foreground">
            Organic
          </Badge>
        )}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-background/90 px-2 py-1 text-sm font-medium backdrop-blur-sm">
          <Star className="h-4 w-4 fill-harvest text-harvest" />
          {rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="mb-1 font-display text-lg font-semibold text-foreground">
          {name}
        </h3>
        
        <div className="mb-3 flex items-center gap-2">
          <img
            src={farmerImage}
            alt={farmer}
            className="h-6 w-6 rounded-full object-cover"
          />
          <span className="text-sm text-muted-foreground">{farmer}</span>
        </div>

        <div className="mb-4 flex items-center gap-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {distance}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {harvestDate}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="font-display text-2xl font-bold text-primary">
              ${price.toFixed(2)}
            </span>
            <span className="text-sm text-muted-foreground">/{unit}</span>
          </div>
          <Button size="sm" variant="soft">
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VegetableCard;
