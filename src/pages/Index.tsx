import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Gallery } from "@/components/Gallery";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Gallery />
    </main>
  );
};

export default Index;