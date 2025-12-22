import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturedVegetables from "@/components/home/FeaturedVegetables";
import HowItWorks from "@/components/home/HowItWorks";
import FeaturedFarmers from "@/components/home/FeaturedFarmers";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedVegetables />
        <HowItWorks />
        <FeaturedFarmers />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
