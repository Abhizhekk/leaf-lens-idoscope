import { Leaf } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative bg-leaf-light min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="font-bebas text-6xl md:text-8xl text-leaf-dark mb-6">
            Identify Any Plant Instantly
          </h1>
          <p className="text-xl md:text-2xl text-leaf-primary mb-8">
            Simply snap a photo and let our AI identify any plant species within seconds.
            Discover the natural world around you with Leaflens.
          </p>
          <button className="bg-leaf-primary hover:bg-leaf-dark text-white font-bebas text-xl px-8 py-4 rounded-lg transition-colors">
            Start Identifying
          </button>
        </div>
      </div>
      <Leaf className="absolute right-10 bottom-10 w-20 h-20 text-leaf-accent animate-leaf-bounce" />
    </div>
  );
};