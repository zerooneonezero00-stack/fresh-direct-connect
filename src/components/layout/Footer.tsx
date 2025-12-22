import { Link } from "react-router-dom";
import { Leaf, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-hero">
                <Leaf className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-semibold text-foreground">
                FarmFresh
              </span>
            </Link>
            <p className="text-muted-foreground">
              Connecting local farmers directly with buyers. Fresh vegetables, fair prices, no middlemen.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/browse" className="text-muted-foreground transition-colors hover:text-primary">
                Browse Vegetables
              </Link>
              <Link to="/farmers" className="text-muted-foreground transition-colors hover:text-primary">
                Our Farmers
              </Link>
              <Link to="/how-it-works" className="text-muted-foreground transition-colors hover:text-primary">
                How It Works
              </Link>
              <Link to="/about" className="text-muted-foreground transition-colors hover:text-primary">
                About Us
              </Link>
            </nav>
          </div>

          {/* For Farmers */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-foreground">For Farmers</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/register" className="text-muted-foreground transition-colors hover:text-primary">
                Join as Farmer
              </Link>
              <Link to="/farmer-guide" className="text-muted-foreground transition-colors hover:text-primary">
                Seller Guide
              </Link>
              <Link to="/pricing" className="text-muted-foreground transition-colors hover:text-primary">
                Pricing
              </Link>
              <Link to="/success-stories" className="text-muted-foreground transition-colors hover:text-primary">
                Success Stories
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-foreground">Contact Us</h3>
            <div className="flex flex-col gap-3">
              <a href="mailto:hello@farmfresh.com" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
                <Mail className="h-4 w-4" />
                hello@farmfresh.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
                <Phone className="h-4 w-4" />
                +1 (234) 567-890
              </a>
              <span className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Local Markets Everywhere
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 FarmFresh. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
