import { MessageSquare, HelpCircle, Headset } from "lucide-react";

export const Gallery = () => {
  const helpItems = [
    {
      title: "Chat Support",
      description: "Get instant help from our plant experts",
      icon: <MessageSquare className="h-12 w-12 text-leaf-primary" />,
    },
    {
      title: "Help Center",
      description: "Browse our comprehensive plant care guides",
      icon: <HelpCircle className="h-12 w-12 text-leaf-primary" />,
    },
    {
      title: "Expert Assistance",
      description: "Connect with professional botanists",
      icon: <Headset className="h-12 w-12 text-leaf-primary" />,
    },
  ];

  return (
    <div className="bg-leaf-light py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-bebas text-5xl text-leaf-dark text-center mb-16">
          Need Help?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {helpItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-8 text-center"
            >
              <div className="flex justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="font-bebas text-2xl text-leaf-dark mb-4">
                {item.title}
              </h3>
              <p className="text-leaf-primary">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};