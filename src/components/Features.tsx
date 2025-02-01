import { Camera, Search, BookOpen, Cloud } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Quick Snap",
    description: "Take a photo of any plant you want to identify",
  },
  {
    icon: Search,
    title: "Instant Results",
    description: "Get accurate identification within seconds",
  },
  {
    icon: BookOpen,
    title: "Detailed Info",
    description: "Learn about care tips and plant characteristics",
  },
  {
    icon: Cloud,
    title: "AI Powered",
    description: "Advanced machine learning for precise identification",
  },
];

export const Features = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-bebas text-5xl text-leaf-dark text-center mb-16">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <feature.icon className="w-16 h-16 mx-auto mb-4 text-leaf-primary" />
              <h3 className="font-bebas text-2xl text-leaf-dark mb-2">
                {feature.title}
              </h3>
              <p className="text-leaf-primary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};