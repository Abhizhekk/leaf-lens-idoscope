export const Gallery = () => {
  const plants = [
    {
      name: "Monstera Deliciosa",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
      confidence: "98%",
    },
    {
      name: "Snake Plant",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
      confidence: "96%",
    },
    {
      name: "Peace Lily",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      confidence: "97%",
    },
  ];

  return (
    <div className="bg-leaf-light py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plants.map((plant, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={plant.image}
                alt={plant.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bebas text-2xl text-leaf-dark mb-2">
                  {plant.name}
                </h3>
                <p className="text-leaf-primary">
                  Confidence: <span className="text-leaf-accent">{plant.confidence}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};