import { Bug } from "lucide-react";

const Disease = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-bebas text-4xl text-leaf-dark mb-8">Check Plant Disease</h1>
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
        <div className="border-2 border-dashed border-leaf-primary rounded-lg p-8 text-center">
          <Bug className="mx-auto h-16 w-16 text-leaf-primary mb-4" />
          <p className="text-leaf-dark mb-4">
            Upload a photo of your plant to check for diseases
          </p>
          <button className="bg-leaf-primary hover:bg-leaf-dark text-white font-bebas text-xl px-8 py-4 rounded-lg transition-colors">
            Upload Photo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Disease;