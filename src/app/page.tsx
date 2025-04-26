import MainLayout from "../components/layout/MainLayout";
import HeroSection from "../components/home/HeroSection";
import FeaturedProperties from "../components/home/FeaturedProperties";
import PropertyMap from "../components/home/PropertyMap";
import Testimonials from "../components/home/Testimonials";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturedProperties />
      <PropertyMap />
      <Testimonials />
    </MainLayout>
  );
}
